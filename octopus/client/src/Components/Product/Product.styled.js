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
    padding: 0 30px;
    @media (min-width:640px) {
        justify-content: center;
    }
    
`

const StyledProductMetaSection = styled.div`
    background-color: rgb(1,25,59);
    color: rgb(54,89,141);
    font-size: 16px;
    padding: 0 0 20px 30px;
    @media (min-width:640px) {
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
    flex-wrap: wrap;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width:1024px) {
        width: 60%;
        align-items: space-around;
    }  
`

const StyledProductPriceRow = styled.div`
    display: flex;
    padding-bottom: 18px;
    width: 100%;
    align-items: center;
    @media(min-width:640px) {
        align-items: end;
    }
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
    cursor: pointer;
    &:hover {
        color: rgb(242, 242, 242);
        background-image: linear-gradient(to bottom, rgb(255, 153, 199) 50%, rgb(253, 104, 169) 50%);
    }

    @media (min-width:640px) {
        width: 70%;
        margin-top: 12px;
    }
    @media (min-width:768px) {
        width: 30%;
        margin-top: 12px;
    }
`

const StyledProductQuantity = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    padding-right: 26px;
    font-size: 8px;
    color: rgb(54,89,141);
    @media (min-width:640px) {
        align-items: center;
        justify-content: start;
        font-size: 16px;
        margin-left: 34px;
    }

`

const StyledProductQuantityCTA = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    flex-wrap: wrap;
    @media (min-width:640px) {
        align-items: center;
        justify-content: start;
        margin-left: 26px;
    }
`

const StyledProductDesc = styled.div`
    display: flex;
    background-color: rgb(1,25,59);
    color: white;
    flex-wrap: wrap;
    padding: 10px 30px 20px 30px; 
    @media (min-width:640px) {
        justify-content: center;
        align-items: center;
    }
`

const StyledProductDescHeader = styled.div`
@media (min-width:1024px) {
    margin-right: 40px;
    padding-right: 56px; 
}
`

const StyledSpecHeader = styled.div`
    display: flex;
    padding-bottom: 10px;
    @media (min-width:1024px) {
        margin-right: 40px; 
    }
`

const StyledSpecSection = styled.div`
    color: white;
    padding: 30px 30px 30px 26px; 
    background-color: rgb(5, 15, 42);
    display: flex;
    flex-wrap: wrap;
    @media (min-width:640px) {
        justify-content: center;
    } 
`

const StyledColumnItem = styled.div`
    padding: 20px 0;
    border-bottom: 2px solid rgb(1,25,59);
    display: flex;
`

const StyledQtySubtractButton = styled.button`
    background-color: rgb(26, 42, 67);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: rgb(36, 57, 92);
    }
    @media (min-width:640px) {
        font-size: 22px;
        padding: 10px;
    }
`

const StyledQtyAddButton = styled.button`
    background-color: rgb(54, 89, 141);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: rgb(63, 104, 166);
    }
    @media (min-width:640px) {
        font-size: 22px;
        padding: 10px;
    }
`

const StyledQtyAmount = styled.div`
    font-weight: 600;
    padding: 0 6px;
    display: flex;
    align-items: center;
`

const StyledPrimaryPrice = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 22px;
    @media (min-width:640px) {
        font-size: 32px;
    }
`

const StyledSecondaryPrice = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 14px;
    @media (min-width:640px) {
        font-size: 16px;
    }
`

const StyledPricing = styled.div`
    display: flex;
    @media (min-width:640px) {
        width:100%;
        justify-content: end;
    }   
`

const StyledCartButtonRow = styled.div`
    display: flex;
    width:100%;
    @media (min-width:640px) {
        justify-content: center;
    }   
`

export default {
    StyledProductImg,
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
    StyledQtySubtractButton,
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
}