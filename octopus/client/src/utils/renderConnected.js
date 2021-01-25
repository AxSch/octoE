import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartSlice from '../reducers/cart/cartSlice';

const renderConnected = (
  ui, {
    store = createStore(cartSlice, {}),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions});
};

export default renderConnected;
