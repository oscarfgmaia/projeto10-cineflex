import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Poster from "./Poster"
import ScreenTitle from "./ScreenTitle"

export default function HomeScreen() {
    const [moviesList, setMoviesList] = useState({})
    useEffect(()=>{
        const MOVIES_URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(MOVIES_URL)
        promise.then((res)=>{
            setMoviesList(res.data)
        })
        promise.catch((err)=>{
            console.log(err)
        })
    },[])
        
    if(moviesList.length === 0 || moviesList.length === undefined){
        return(<h1>CARREGANDO</h1>)
    }

    return (
        <>
            <ScreenTitle>Selecione o filme</ScreenTitle>
            <CenteredDiv>
                <PostsContainer>
                    <StyledPosterList>
                        {moviesList.map((movieObj) => <Poster key={movieObj.id} movie={movieObj}/>)}                     
                    </StyledPosterList>
                </PostsContainer>
            </CenteredDiv>
        </>
    )
}

const CenteredDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
`
const PostsContainer = styled.div`
        width: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
`
const StyledPosterList = styled.div`
        width: 320px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
`
