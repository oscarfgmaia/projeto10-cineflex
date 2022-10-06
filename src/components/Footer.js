import styled from "styled-components";

export default function Footer({ movie }) {
    const { posterURL, title } = movie
    return (
        <StyledFooter>
            <CenteredDiv>
                <img src={posterURL} alt={title}/>
                    <h1>{title}</h1>
            </CenteredDiv>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    height:117px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 0px;
`
const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    h1{
        font-size: 22px;
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