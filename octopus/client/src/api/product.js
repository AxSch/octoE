import { gql } from 'apollo-boost';
 
export const GET_PRODUCT = gql`
query getProductById($ID: ID) {
    product(productId: $ID) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }  
`