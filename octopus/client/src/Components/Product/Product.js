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
    background-image: linear-gradient(to bottom, rgb(5, 15, 42) 50%, rgb(1,25,59) 40%);
    @media(min-width:768px) {
        padding-top: 40px;
        background-image: none;
        background-color: rgb(1,25,59);s
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
    padding: 20px 30px 20px 30px;
    display: flex;
    flex-wrap: wrap
`
const Row = styled.div`
    @media(min-width:768px) {
        display: flex;
        flex-wrap: wrap;
    }
`

const StyledProductPriceRow = styled.div`
    display: flex;
    padding-bottom: 18px;
    justify-content: space-between;
    width: 100%;
`

const StyledButton = styled.button`
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
    padding-right: 22px
`

const StyledProductQuantityCTA = styled.div`
display: flex;
width: 100%;
    justify-content: end;
`
export const Product = ({ data }) => {
    const [quantity, setQuantity] = useState(1)
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
                        <div>
                            {data.price}
                        </div>
                        <StyledProductQuantityCTA>
                            <button>+</button>
                                {quantity}
                            <button>-</button>
                        </StyledProductQuantityCTA>
                    </StyledProductPriceRow>
                    <StyledButton>Add to cart</StyledButton>
                </StyledProductPriceSection>
            </Row>
        </StyledProduct>
    )
}
