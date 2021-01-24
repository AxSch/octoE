import React, { useState } from 'react'
import styled from 'styled-components'


const StyledProductImg = styled.div`
    display: flex;
    justify-content: center;
    > img {
        width: 330px;
        height: 390px;
    }
`

const StyledProduct = styled.div`
    background-image: linear-gradient(to bottom, rgb(5, 15, 42) 100%, rgb(1,25,59) 100%);
    @media(min-width:768px) {
        padding-top: 40px;
        background-color: rgb(1,25,59);
    }
`
const StyledProductHeader = styled.div`
    display: flex;
    flex-direction:row;
    background-color: rgb(1,25,59);
    color: white;
    font-size: 18px;
    padding-left: 30px;
    @media (min-width:480px) {
        justify-content: center;
    }
    
`

const StyledProductMetaSection = styled.div`
    background-color: rgb(1,25,59);
    color: rgb(54,89,141);
    font-size: 16px;
    padding: 0 0 20px 30px;
    @media (min-width:480px) {
        display: flex;
        justify-content: center;
    }
`

const StyledProductPriceSection = styled.div`
    background-color: rgb(5, 15, 42);
    color: white;
    font-size: 16px;
    padding: 20px 30px 30px 30px;
    display: flex;
    flex-wrap: wrap
`
const Row = styled.div`
    @media(min-width:768px) {
        display: flex;
        flex-wrap: wrap;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StyledProductPriceRow = styled.div`
    display: flex;
    padding-bottom: 18px;
    justify-content: space-between;
    width: 100%;
`

const StyledCartButton = styled.button`
    color: white;
    font-size: 26px;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    background-image: linear-gradient(to bottom, rgb(255,100,170) 50%, rgb(251, 26, 123) 50%);
    width: 100%;
    padding: 16px;
`

const StyledProductQuantity = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    padding-right: 24px;
    font-size: 8px;
    color: rgb(54,89,141);
`

const StyledProductQuantityCTA = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`

const StyledProductDesc = styled.div`
    display: flex;
    background-color: rgb(1,25,59);
    color: white;
    flex-wrap: wrap;
    padding: 10px 30px 30px 30px; 
`

const StyledSpecHeader = styled.div`
    display: flex;
    padding-bottom: 10px;
`

const StyledSpecSection = styled.div`
    color: white;
    padding: 30px 30px 30px 26px; 
    background-color: rgb(5, 15, 42);
    display: flex;
    flex-wrap: wrap;
`

const StyledColumnItem = styled.div`
    padding: 20px 0;
    border-bottom: 2px solid rgb(1,25,59);
    display: flex;
`

const StyledQtyRemoveButton = styled.button`
    background-color: rgb(26, 42, 67);
    color: white;
    border: none;
    border-radius: 4px;
`

const StyledQtyAddButton = styled.button`
    background-color: rgb(54, 89, 141);
    color: white;
    border: none;
    border-radius: 4px;
`

const StyledQtyAmount = styled.div`
    font-weight: 600;
    padding: 0 4px;
`

const StyledPrimaryPrice = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 22px;
`

const StyledSecondaryPrice = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 14px;
`

const Product = ({ data }) => {
    const [quantity, setQuantity] = useState(1)
    const formatPrice = (price) => {
        const decimalPoint = (((price / 1000) * 10).toFixed(2)).toString()
        const splitAtDecimal = decimalPoint.split('.')
        return {
            primaryNo: Number(splitAtDecimal[0]),
            secondaryNo: Number(splitAtDecimal[1]),
        }
    }
    const formattedPrice = formatPrice(data.price)
    return (
        <StyledProduct>
            <Row>
                <StyledProductImg>
                    <img src={data.imgUrl} />
                </StyledProductImg>
                <StyledProductHeader>
                    <h1>{data.name}</h1>
                </StyledProductHeader>
                <StyledProductMetaSection>{data.power} // Packet of {data.quantity}</StyledProductMetaSection>
                <StyledProductPriceSection>
                    <StyledProductQuantity>
                        QTY
                    </StyledProductQuantity>
                    <StyledProductPriceRow>
                        <StyledPrimaryPrice>
                            <span>{formattedPrice.primaryNo}</span>
                        </StyledPrimaryPrice>
                        <StyledSecondaryPrice>
                            <span>.{formattedPrice.secondaryNo}</span>
                        </StyledSecondaryPrice>
                        <StyledProductQuantityCTA>
                            <StyledQtyRemoveButton>-</StyledQtyRemoveButton>
                            <StyledQtyAmount>{quantity}</StyledQtyAmount>
                            <StyledQtyAddButton>+</StyledQtyAddButton>
                        </StyledProductQuantityCTA>
                    </StyledProductPriceRow>
                    <StyledCartButton>Add to cart</StyledCartButton>
                </StyledProductPriceSection>
                <StyledProductDesc>
                    <h1>Description</h1>
                    <span>{data.description}</span>
                </StyledProductDesc>
                <StyledSpecSection>
                    <StyledSpecHeader>
                        <h1>Specifications</h1>
                    </StyledSpecHeader>
                    <Column>
                        <StyledColumnItem>
                            <Column>
                                <span>Brand</span>
                            </Column>
                            <Column>{data.brand}</Column>
                        </StyledColumnItem>
                        <StyledColumnItem>
                            <Column>
                                <span>Item Weight</span>
                            </Column>
                            <Column>{data.weight}</Column>
                        </StyledColumnItem>
                        <StyledColumnItem>
                            <Column>
                                <span>Dimensions</span>
                            </Column>
                            <Column>{data.height}x{data.width}x{data.length}</Column>
                        </StyledColumnItem>
                        <StyledColumnItem>
                            <Column>
                                <span>Item model number</span>
                            </Column>
                            <Column>{data.modelCode}</Column>
                        </StyledColumnItem>
                        <StyledColumnItem>
                            <Column>
                                <span>Colour</span>
                            </Column>
                            <Column>{data.colour}</Column>
                        </StyledColumnItem>
                    </Column>
                </StyledSpecSection>
            </Row>
        </StyledProduct>
    )
}

export default Product;
