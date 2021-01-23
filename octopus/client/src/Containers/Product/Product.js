import React from 'react'
import { GET_PRODUCT } from '../../api/product'
import { useQuery } from "@apollo/react-hooks";


export const ProductContainer = () => {
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { ID: 1 }
    })
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    return(
        <div/>
    )
}
