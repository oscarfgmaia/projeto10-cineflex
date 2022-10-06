import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import ScreenTitle from "./ScreenTitle";

export default function SessionScreen() {
    const {id} = useParams()
    const [movie,setMovie] = useState({})
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

    return (
        <>
            <ScreenTitle>Selecione o horário ID: {id}</ScreenTitle>
            <Footer movie={movie}/>
        </>
    )
}

