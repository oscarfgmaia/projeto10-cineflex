import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/css/GlobalStyle";
import Header from "./Header";
import HomeScreen from "./HomeScreen";
import SeatScreen from "./SeatScreen";
import SessionScreen from "./SessionScreen";
import SucessScreen from "./SuccessScreen";

export default function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/sessoes/:id" element={<SessionScreen />} />
                    <Route path="/assentos/:id" element={<SeatScreen />} />
                    <Route path="/sucesso" element={<SucessScreen />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}