import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/css/GlobalStyle";
import Header from "./Header";
import HomeScreen from "./HomeScreen";
export default function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/filme/id" />
                    <Route path="/sessao/id" />
                    <Route path="/sucesso" />
                </Routes>
            </BrowserRouter>
        </>
    )
}