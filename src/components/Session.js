import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({ session }) {
    const { weekday, date, showtimes } = session
    return (
        <StyledSessions>
            <h1>{weekday} - {date}</h1>
            <ul>
                <MovieSessions>
                    {showtimes.map((horario) =>
                        <Link key={horario.id} to={`/assentos/${horario.id}`}>
                            <li>
                                <StyledButton>{horario.name}</StyledButton>
                            </li>
                        </Link>
                    )}
                </MovieSessions>
            </ul>
        </StyledSessions>
    )
}


const MovieSessions = styled.div`
    display: flex;
    li{
        margin-right: 10px;
    }
`
const StyledButton = styled.button`
    margin-top: 15px;
    background-color: #E8833A;
    width: 83px;
    height: 43px;
    border: none;
    border-radius:3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;    
`

const StyledSessions = styled.div`
    padding-top:15px;
    padding-left: 15px;
`