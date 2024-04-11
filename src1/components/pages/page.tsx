import {PagesType} from "../dataState/dataState";
import {useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";


type PropsType = {
    pages: PagesType[]
}

export const Page = (props: PropsType) => {
    const params = useParams()
    const location=useLocation()
    console.log(location.pathname)
    return (
        <>
            {location.pathname==='/page/1'&& <div>SECRET TEXT</div>}
            {props.pages[Number(params.id)]
                ? <div>
                    <div>
                        {props.pages[Number(params.id)].heading}
                    </div>
                    <div>
                        {props.pages[Number(params.id)].about}
                    </div>
                </div>
                : <Error404/>
            }
        </>


    );
};