import { useEffect } from "react";
import styled from "styled-components";

export default function SessionFooter({ movieObj }) {
    const movie = movieObj.movie;
    console.log(movieObj)
    const hour = movieObj.name;
    const day = movieObj.day
    // const weekday = day.weekday;
    // const title = movie.title;
    // const posterURL = movie.posterURL;
    return (
        <StyledFooter>
            <CenteredDiv>
                <img src={'posterURL'} alt={'title'} />
                <h1>{'title'}</h1>
                <div>
                    <h1>{'weekday'}</h1><h1>{'hour'}</h1>
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