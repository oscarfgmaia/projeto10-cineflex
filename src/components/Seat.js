
import { useState } from "react";
import styled from "styled-components";

export default function Seat({ id, name, isAvailable, selectedSeats, setSelectedSeats }) {
    
    let [seatSelected, setSeatSelected] = useState(false)
    function isSelected() {
        if (isAvailable && !seatSelected) {
            setSeatSelected(!seatSelected)
            setSelectedSeats([...selectedSeats,id])
            return
        }
        else if(isAvailable){
            setSeatSelected(!seatSelected)
            let newArr = [...selectedSeats]
            newArr = newArr.filter((seat) => seat !== id)
            setSelectedSeats(newArr)
            return
        }
        else{
            alert("Esse assento não está disponível")
        }
    }

    return (
        <StyledSeat isAvailable={isAvailable} onClick={isSelected} seatSelected={seatSelected} >
            <h1>{name}</h1>
        </StyledSeat>
    )
}



export const StyledSeat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => 
    props.seatSelected ? '#1AAE9E' : props.isAvailable ? '#C3CFD9' : '#FBE192'};

    border: 1px solid ${props => 
    props.seatSelected ? '#0E7D71' : props.isAvailable ? '#808F9D' : '#F7C52B'};
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
