import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages/home/home";

export const AppRoutes: React.FC = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}