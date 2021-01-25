import { fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import React from 'react'
import Product from './Product'

import renderConnected from '../../utils/renderConnected'

const initialState = {
  items: {}
}

const mockProduct = {
  id: 1,
  name: "Bulba",
  power: "Green",
  description: "Renewables at your fingertips",
  price: 3444,
  quantity: 1,
  brand: "Oak",
  weight: 15.2,
  height: 2.04,
  length: 1.00
}
let getByTestId, container

describe('should be able to increase and decrease product quantity', () => {

  beforeEach(() => {
    const utils = renderConnected(<Product data={mockProduct}/>, { initialState });
    getByTestId = utils.getByTestId;
    container = utils.container
  });

  it('renders successfully', () => {
    expect(getByTestId('product')).toBeInTheDocument()
    expect(container).toMatchSnapshot();
  });
  
  it('should increase the quantity', () => {
    const addButton = getByTestId('addButton')
    const quantityCounter = getByTestId('productQuantity')
    expect(quantityCounter.textContent).toBe('1')
    fireEvent.click(addButton)
    expect(quantityCounter.textContent).toBe('2')
  });

  it('should decrease the quantity', () => {
    const addButton = getByTestId('addButton')
    const subtractButton = getByTestId('subtractButton')
    const quantityCounter = getByTestId('productQuantity')
    expect(quantityCounter.textContent).toBe('1')
    fireEvent.click(addButton)
    expect(quantityCounter.textContent).toBe('2')
    fireEvent.click(subtractButton)
    expect(quantityCounter.textContent).toBe('1')
  });
});

describe('should be able to add items to the basket', () => {
  const mockDispatch = jest.fn()
  ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
  
  beforeEach(() => {
    const utils = renderConnected(<Product data={mockProduct}/>, { initialState });
    getByTestId = utils.getByTestId;
  });
  
  it('should successfully add an item to the basket', () => {
    const addToCartButton = getByTestId('addToCartButton')
    fireEvent.click(addToCartButton)
    const expectedPayload = {
      payload: {
        id: 1,
        price: 3444,
        productName: "Bulba",
        quantity: 1,
      },
      type: "cart/storeItems"
    }
    expect(mockDispatch).toHaveBeenCalledWith(expectedPayload)
  });
});
