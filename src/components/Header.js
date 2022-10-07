import styled from "styled-components"

export default function Header() {
    return (
        <>
            
            <StyledHeader>
                <h1>CINEFLEX</h1>
            </StyledHeader>
        </>
    )
}

const StyledHeader = styled.div`
    background-color: #C3CFD9;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: #E8833A;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center
    }

;
`