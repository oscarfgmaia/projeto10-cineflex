import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ScreenTitle from "./ScreenTitle";
import Seat from "./Seat";
import Footer from "./Footer";
import { StyledSeat } from "./Seat";
export default function SeatScreen() {
    const { id } = useParams();
    const [movie, setMovie] = useState({
        seats: [],
        movie: { posterURL: '', title: '' },
    })
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`;
        const promise = axios.get(URL);
        promise.then(res => {
            setMovie(res.data)
        });
        promise.catch(err => {
            console.log(err.response.data)
        });
    }, [id])

    if (movie.seats.length === 0) {
        return <h1>AGUARDANDO return</h1>
    }

    return (
        <>
            <ScreenTitle>
                Selecione o(s) assento(s)
            </ScreenTitle>
            <StyledSeatsListsContainer>
                {movie.seats.map((s) =>
                    <Seat
                        key={s.id}
                        id={s.id}
                        name={s.name}
                        isAvailable={s.isAvailable}
                        setSelectedSeats={setSelectedSeats}
                        selectedSeats={selectedSeats}>
                    </Seat>)}
            </StyledSeatsListsContainer>
            <Legend>
                <ul>
                    <li>
                        <StyledSeat seatSelected={true}></StyledSeat>
                        <h1>Selecionado</h1>
                    </li>
                    <li>
                        <StyledSeat isAvailable={true}></StyledSeat>
                        <h1>Disponível</h1>
                    </li>
                    <li>
                        <StyledSeat isAvailable={false}></StyledSeat>
                        <h1>Indisponível</h1>
                    </li>
                </ul>
            </Legend>
            <Footer posterURL={movie.movie.posterURL} title={movie.movie.title}>
                <h1>{movie.day.weekday} - {movie.name}</h1>
            </Footer>
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
const Legend = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
        width: 85%;
        display: flex;
        justify-content: space-around;
    }
    li{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
    }
`