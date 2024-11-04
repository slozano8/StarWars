import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import {planets} from './pages/planets';
import { spaceships } from "./pages/spaceships";
import { films } from "./pages/films";

const AppRouter = () => {
return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<planets />} />
                <Route path="/spaceships" element={<spaceships />} />
                <Route path="/films" element={<films />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;