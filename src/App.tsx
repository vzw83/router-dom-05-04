import React, {useContext, useEffect, useState} from 'react';
import styles from "./components/Site.module.css";
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from './components/pages/_styles'
import {ProtectedPage} from "./components/pages/ProtectedPage";
import {ModelCrossContext} from "./context/ModelProvider";
import {useWindowSize} from "./helpers/useWindowsSize";


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PRICES: '/prices',
} as const

function App() {
    const navigate = useNavigate()
    const onClickBackHandler = () =>{
        navigate(-1)
    }

    const {model} = useContext(ModelCrossContext)
    // const [burger, setBurger] = useState(true)

    // function useWindowSize() {
    //     const [windowSize, setWindowSize] = useState(0);
    //
    //     useEffect(() => {
    //         function handleResize() {
    //             setWindowSize(window.innerWidth);
    //         }
    //
    //        window.addEventListener("resize", handleResize)
    //         handleResize()
    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }, []);
    //
    //     return windowSize;
    // }

    const size = useWindowSize()

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {
                    size>1000
                        ? <div className={styles.nav}>
                            <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                            <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                            {!model && <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>}
                            <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                            <S.NavWrapper><NavLink to={'/protected'}>Protected Page</NavLink></S.NavWrapper>
                        </div>
                        : <div></div>
                }

                {/*<div className={styles.nav}>*/}
                {/*    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>*/}
                {/*    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>*/}
                {/*    {!model && <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>}*/}
                {/*    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>*/}
                {/*    <S.NavWrapper><NavLink to={'/protected'}>Protected Page</NavLink></S.NavWrapper>*/}
                {/*</div>*/}
                <div className={styles.content}>

                    <div className={styles.HorizontalNavigation}>
                        <Link to="/adidas" className={styles.LinkLikeButton}>Главная страница (ADIDAS)</Link>
                        <button onClick={onClickBackHandler} className={styles.ButtonLikeLink}>НАЗАД</button>
                    </div>

                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}
                    {/*    /!*<Route path={'/adidas/:id'} element={<Model/>}/>*!/*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}

                    {/*    <Route path={'/*'} element={<Error404/>}/>*/}

                    {/*    /!*<Route path={'/page/error'} element={<Error404/>}/>*!/*/}
                    {/*    /!*<Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>*!/*/}
                    {/*</Routes>*/}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



