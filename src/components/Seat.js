import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

export default function Seat({ id, name, isAvailable }) {
    return (
        <StyledSeat isAvailable={isAvailable} onClick={()=>alert('clicado')}>
            <h1>{name}</h1>
        </StyledSeat>
    )
}

const StyledSeat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props=>props.isAvailable?'#C3CFD9':'#FBE192'};
    border: 1px solid ${props=>props.isAvailable?'#808F9D':'#F7C52B'};
    margin-bottom: 15px;
    margin-left: 4px;
    margin-right: 4px;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
    }
`