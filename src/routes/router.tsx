import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Abibas} from "../components/pages/Abibas";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Prices} from "../components/pages/Prices";
import {Croses} from "../components/pages/Croses";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRISES: '/prices',
    MODEL: '/:model/:id'
} as const
export const router = createBrowserRouter([

    // {
    //     path: '/',
    //     element: <Croses/>,
    //     errorElement: <Error404/>,
    //     children: [
    //         {
    //             path: PATH.ADIDAS,
    //             element: <Adidas/>,
    //         }
    //
    //     ]
    // }

    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/',
                element: <Navigate to={PATH.ADIDAS}/>
            },
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
            {
                path: PATH.PUMA,
                element: <Puma/>,
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>,
            },
            {
                path: PATH.PRISES,
                element: <Prices/>
            },
            {
                path: PATH.MODEL,
                element: <Model/>
            },
            {
                path: '/protected',
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: '/error',
                element: <Error404/>
            },
        ]
    }
])
// <Route path={'/:model/:id'} element={<Model/>}/>