import { useParams } from "react-router-dom";
import ScreenTitle from "./ScreenTitle";
export default function SeatScreen(){
    const {id} = useParams();
    console.log(id)
    return(
        <ScreenTitle>
            Selecione o(s) assento(s)
        </ScreenTitle>
    )
}