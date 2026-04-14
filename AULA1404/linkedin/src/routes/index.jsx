import { Route, Routes } from "react-router-dom";

import Home from "../pages/home.jsx";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}