import styled from "styled-components";

export default function ScreenTitle(props) {
    return (
        <StyledTitle>
            <h1>
                {props.children}
            </h1>
        </StyledTitle>
    )
}

const StyledTitle = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
    }

`