import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ScreenTitle from "./ScreenTitle";
import Seat from "./Seat";
import SessionFooter from "./SessionFooter";
export default function SeatScreen() {
    const { id } = useParams();
    const [seatsList, setSeatsList] = useState([]);
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`;
        const promise = axios.get(URL);
        promise.then(res => {
            setSeatsList(res.data.seats)
            setMovie(res.data)
        });
        promise.catch(err => {
            console.log(err.response.data)
        });
    }, [])
    return (
        <>
            <ScreenTitle>
                Selecione o(s) assento(s)
            </ScreenTitle>
            <StyledSeatsListsContainer>
                {seatsList.map((s) => <Seat key={s.id} name={s.name} isAvailable={s.isAvailable}></Seat>)}
            </StyledSeatsListsContainer>
            <SessionFooter movieObj={movie} /> 

        </>
    )
}

const StyledSeatsListsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left:15px;
    padding-right: 15px;
`