import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Poster({movie}) {
    const {id,posterURL,title} = movie;
    return (
        <StyledPoster>
            <Link to={`/sessoes/${id}`}>
            <img src={posterURL} alt={title}></img>
            </Link>
        </StyledPoster>
    )
}

const StyledPoster = styled.div`
    margin-bottom: 20px;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 129px;
        border-radius: 3px;
    }
`

