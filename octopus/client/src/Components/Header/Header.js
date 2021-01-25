import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { selectCartItems } from '../../reducers/cart/cartSlice'
import { useSelector } from 'react-redux'
import HeaderStyling from './Header.styled'

const {
    StyledHeader,
    StyledLogo,
    StyledCartNumber,
    StyledCartRow
} = HeaderStyling

const Header = () => {
    const cartItems = useSelector(selectCartItems)

    const renderCartAmount = () => {
        if (cartItems === 0) return
        return (
            <StyledCartNumber>
                {cartItems}
            </StyledCartNumber>
        )
    }
    return (
        <StyledHeader>
            <StyledLogo>
                <h1>octopus</h1>
                <h1>energy</h1>
            </StyledLogo>
            <StyledCartRow>
                <FontAwesomeIcon icon={faShoppingBasket} size="3x"/>
                {renderCartAmount()}
            </StyledCartRow>
        </StyledHeader>
    );
}

export default Header;