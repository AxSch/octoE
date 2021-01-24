import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    background-color: rgb(1,25,59);
    font-size: 14px;
    padding: 30px;
`

const StyledFooterText = styled.div`
    display: flex;
    color: rgb(54,89,141);
    padding-bottom: 6px;
    @media (min-width:1024px) {
        justify-content: center;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterText>Octopus Energy Ltd is a company registered in England and Wales.</StyledFooterText>
            <StyledFooterText>Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT.
                Trading office: 20-24 Broadwick Street, London, W1F 8HT</StyledFooterText>
        </StyledFooter>
    )
}

export default Footer