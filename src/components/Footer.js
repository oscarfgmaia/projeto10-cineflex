import styled from "styled-components";

export default function Footer({ posterURL, title, children }) {
    return (
        <StyledFooter>
            <CenteredDiv>
                <img src={posterURL} alt={title} />
                <div>
                    {title}
                    {children}
                </div>
            </CenteredDiv>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: #DFE6ED;
    height:117px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    bottom: 0px;
    z-index: 5;
`
const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    font-family: Roboto;
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

    h1{
        margin-top: 2px;
    }
    img{
        margin:0px 10px;
        height: 80px;
        padding: 5px;
        background-color: white;
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
    }

`