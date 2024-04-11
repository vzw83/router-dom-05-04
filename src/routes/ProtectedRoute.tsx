import React, {ReactElement} from "react";
import {Navigate} from "react-router-dom";

type PropsType ={
    children: ReactElement
}
export const ProtectedRoute: React.FC<PropsType>=({children})=>{
    const logged=true
    return logged
    ? children: <Navigate to="/error"/>
}