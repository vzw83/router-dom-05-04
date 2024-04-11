import React, {Profiler} from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import styled from "styled-components";
import {S} from "./styles/NavWrapper"
import {Page} from "./pages/page";
import {dataState} from "./dataState/dataState";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*<div><NavLink className={({isActive})=>isActive?styles.active: styles.navLink} to={"page1"}>Page1</NavLink></div>*/}
                    {/*<div><NavLink className={({isActive})=>isActive?styles.active: styles.navLink} to={"page2"}>Page2</NavLink></div>*/}
                    {/*<div><NavLink className={({isActive})=>isActive?styles.active: styles.navLink} to={"page3"}>Page3</NavLink></div>*/}
                    <S.NavWrapper><NavLink to={"page/1"}>Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={"page/2"}>Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={"page/3"}>Page3</NavLink></S.NavWrapper>

                </div>
                <div className={styles.content}>
                    {/*content*/}
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"page1"}/>}/>
                        <Route path={"page/:id"} element={<Page pages={dataState.pages}/>}/>
                        {/*<Route path={"page2"} element={<PageTwo/>}/>*/}
                        {/*<Route path={"page3"} element={<PageThree/>}/>*/}

                        <Route path={"/*/*"} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

// const NavWrapper = styled.div`
//
//     margin-left: 10px;
//
//     font-size: 20px;
//
//
//     & > a {
//
//         text-decoration: none;
//
//         color: #1e3786;
//
//     }
//
//
//     & > a.active {
//
//         text-decoration: none;
//
//         color: #03eaff;
//
//     }
//
//
//     & > a:hover {
//
//         color: steelblue; /* Цвет ссылки */
//
//     }
//
// `
