import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: rgb(5, 15, 42);
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

const StyledCartNumber = styled.div`
    background-color: rgb(255,100,170);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content:center;
    align-items: center;
`

const StyledCartRow = styled.div`
    display: flex;s
`

export default {
    StyledHeader,
    StyledLogo,
    StyledCartNumber,
    StyledCartRow
}