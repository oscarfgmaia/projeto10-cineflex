import styled from "styled-components";

export default function Poster({postImg}) {
    return (
        <StyledPoster>
            <img src={postImg} alt="Zack Snyder Justice League"></img>
        </StyledPoster>
    )
}

const StyledPoster = styled.div`
    margin-bottom: 20px;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 129px;
    }
`

