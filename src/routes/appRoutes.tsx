import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages/home/home";
import { Project } from "../pages/project/project";


export const AppRoutes: React.FC = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project/:id" element={<Project/>}/>
        </Routes>
    )
}