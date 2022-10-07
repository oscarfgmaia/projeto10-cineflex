import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import ScreenTitle from "./ScreenTitle";
import Session from "./Session";

export default function SessionScreen() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
        const promise = axios.get(URL)

        promise.then((res) => {
            setMovie(res.data)
        })

        promise.catch((err) => {
            console.log(err)
        })
    }, [])

    if (Object.keys(movie).length === 0) {
        console.log(movie)
        return (<h1>CARREGANDO</h1>)
    }
    return (
        <>
            <ScreenTitle>Selecione o horário ID: {id}</ScreenTitle>
            <StyledSessionList>
                {movie.days.map((session) => <Session key={session.id} session={session} />)}
            </StyledSessionList>
            <Footer movie={movie} />
        </>
    )
}

const StyledSessionList = styled.div`
margin-bottom: 125px;
`