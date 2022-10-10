import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ScreenTitle from "./ScreenTitle";
import Seat from "./Seat";
import Footer from "./Footer";
import { StyledSeat } from "./Seat";
export default function SeatScreen() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [movie, setMovie] = useState({
        seats: [],
        movie: { posterURL: '', title: '' },
    })
    const [form, setForm] = useState({ name: '', cpf: '' })
    const [selectedSeats, setSelectedSeats] = useState([])

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`;
        const promise = axios.get(URL);
        promise.then(res => {
            setMovie(res.data)
        });
        promise.catch(err => {
            alert(err.response.data)
        });
    }, [id])

    function onSubmit(e) {
        e.preventDefault()
        if (selectedSeats.length === 0) {
            alert("Você deve selecionar algum assento!")
            return;
        }
        if(form.name.length < 3){
            alert("DIGITE UM NOME VÁLIDO")
            return
        }
        if(form.cpf.length !== 11){
            alert("CPF INVÁLIDO!")
            return
        }
        else {
            const body = { ids: selectedSeats, ...form }
            const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
            const promise = axios.post(URL, body)
            promise.then(res => {
                navigate("/sucesso", { state: { form, selectedSeats, movie } })
            })
            promise.catch(err => {
                alert(err.response.data)
            })
        }
    }

    if (movie.seats.length === 0) {
        return <h1>AGUARDANDO return</h1>
    }

    return (
        <CenteredDiv>
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
            <form onSubmit={onSubmit}>
                <StyledInput>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome..."
                        required
                    />
                </StyledInput>
                <StyledInput>
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input
                        value={form.cpf}
                        onChange={handleChange}
                        type="number"
                        id="cpf"
                        name="cpf"
                        placeholder="Digite seu CPF..."
                        required
                    />
                </StyledInput>
                <StyledButton>Reservar assento(s)</StyledButton>
            </form>
            <Footer posterURL={movie.movie.posterURL} title={movie.movie.title}>
                <h1>{movie.day.weekday} - {movie.name}</h1>
            </Footer>
        </CenteredDiv>
    )
}

const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        margin-bottom: 117px;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const StyledButton = styled.button`
    margin-top: 30px;
    box-sizing: border-box;
    background-color: #E8833A;
    border-radius: 3px;
    width: 225px;
    height: 42px;
    border:none;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.04em;
    text-align: center;
    color: white;
`

const StyledInput = styled.div`
    width: 100%;
    padding:0px 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;

    input{
        padding-left: 5px;
        height: 51px;
        margin-top: 5px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-family: Roboto;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;

    }
`
const StyledSeatsListsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left:15px;
    padding-right: 15px;
`
const Legend = styled.div`
    width: 100%;
    margin:0px 20px;
    margin-bottom:35px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
        width: 80%;
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