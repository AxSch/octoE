import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import ProductStyling from './Product.styled'

const {
    StyledProductImg,
    Row,
    Column,
    StyledProduct,
    StyledProductHeader,
    StyledProductMetaSection,
    StyledProductQuantity,
    StyledProductQuantityCTA,
    StyledProductDesc,
    StyledSpecHeader,
    StyledSpecSection,
    StyledColumnItem,
    StyledQtyRemoveButton,
    StyledQtyAddButton,
    StyledQtyAmount,
    StyledProductPriceSection,
    StyledProductPriceRow,
    StyledPrimaryPrice,
    StyledSecondaryPrice,
    StyledPricing,
    StyledCartButtonRow,
    StyledCartButton,
    StyledProductDescHeader
 } = ProductStyling

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
                    <StyledProductImg>
                        <img src={data.imgUrl} />
                    </StyledProductImg>
                    <StyledProductHeader>
                        <h1>{data.name}</h1>
                    </StyledProductHeader>
                    <StyledProductMetaSection>{data.power} // Packet of {data.quantity}</StyledProductMetaSection>
                
                    <StyledProductPriceSection>
                        <StyledProductPriceRow>
                            <StyledPricing>
                                <StyledPrimaryPrice>
                                    <span>{formattedPrice.primaryNo}</span>
                                </StyledPrimaryPrice>
                                <StyledSecondaryPrice>
                                    <span>.{formattedPrice.secondaryNo}</span>
                                </StyledSecondaryPrice>
                            </StyledPricing>
                            <StyledProductQuantityCTA>
                                <StyledProductQuantity>
                                    QTY
                                </StyledProductQuantity>
                                <StyledQtyRemoveButton>
                                    <FontAwesomeIcon icon={faMinus} />
                                </StyledQtyRemoveButton>
                                <StyledQtyAmount>{quantity}</StyledQtyAmount>
                                <StyledQtyAddButton>
                                    <FontAwesomeIcon icon={faPlus} />
                                </StyledQtyAddButton>
                            </StyledProductQuantityCTA>
                        </StyledProductPriceRow>
                        <StyledCartButtonRow>
                            <StyledCartButton>Add to cart</StyledCartButton>
                        </StyledCartButtonRow>
                    </StyledProductPriceSection>
                <StyledProductDesc>
                    <StyledProductDescHeader>
                        <h1>Description</h1>
                    </StyledProductDescHeader>
                    <Column>
                        <span>{data.description}</span>
                    </Column>
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
        </StyledProduct>
    )
}

export default Product;
