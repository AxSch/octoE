import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.div`
    background-color: rgb(4, 14, 41);
    display: flex;
    margin-top: 0;
    padding: 10px;
    color: white;
    justify-content: space-between;
    align-items: center
`

const StyledLogo = styled.div`
    display: flex;
    flex-direction: row;
    > :last-child {
        padding-left: 4px;
        font-weight: 100;
    }

`

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo>
                <h1>octopus</h1>
                <h1>energy</h1>
            </StyledLogo>
            <FontAwesomeIcon icon={faShoppingBasket} size="3x"/>
        </StyledHeader>
    );
}

export default Header;