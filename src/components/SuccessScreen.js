import { Link, useLocation } from "react-router-dom"
import styled from "styled-components";
import ScreenTitle from "./ScreenTitle";
import { StyledButton } from "./SeatScreen";

export default function SucessScreen() {
    const { state } = useLocation();
    //navigate("/sucesso",{state:{form,selectedSeats,movie}})
    const { form, selectedSeats, movie } = state;
    let seatsName = []

    function formataCPF(cpf) {
        //retira os caracteres indesejados...
        cpf = cpf.replace(/[^\d]/g, "");

        //realizar a formatação...
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    let formatedCpf = formataCPF(form.cpf)

    for (let i = 0; i < movie.seats.length; i++) {
        selectedSeats.filter((s) => {
            if (s === movie.seats[i].id) {
                seatsName.push(movie.seats[i].name)
                return true;
            }
            return false;
        })
    }

    return (
        <CenteredDiv>
            <ScreenTitle color={'#247A6B'}>
                Pedido feito com sucesso!
            </ScreenTitle>
            <StyledMargin />
            <StyledShowForm>
                <h1>
                    Filme e sessão
                </h1>
                <h2>
                    {movie.movie.title}
                </h2>
                <h2>
                    {movie.day.date} {movie.name}
                </h2>
            </StyledShowForm>
            <StyledShowForm>
                <h1>Ingressos</h1>
                {seatsName.map((s, idx) =>
                    <h2 key={idx}>
                        Assento {s}
                    </h2>)}
            </StyledShowForm>
            <StyledShowForm>
                <h1>
                    Comprador
                </h1>
                <h2>
                    Nome: {form.name}
                </h2>
                <h2>
                    CPF: {formatedCpf}
                </h2>
            </StyledShowForm>
            <Link to={"/"}>
                <StyledButton>Voltar para Home</StyledButton>
            </Link>
        </CenteredDiv>
    )
}

const StyledMargin = styled.div`
margin-bottom: 20px;
`
const CenteredDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const StyledShowForm = styled.div`
    width: 90%;
    h1{
        font-weight: bold;
        font-family: Roboto;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        text-align: left;
    }
    h2{
        font-family: Roboto;
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;
        text-align: left;

    }
    margin-bottom: 30px;
`