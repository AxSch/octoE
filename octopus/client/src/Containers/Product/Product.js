import React from 'react'
import { GET_PRODUCT } from '../../api/productGQL'
import { useQuery } from "@apollo/react-hooks";
import { Product } from '../../Components/Product/Product';


export const ProductContainer = () => {
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { ID: 1 }
    })
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    return(
        <Product data={data.product} />
    )
}
