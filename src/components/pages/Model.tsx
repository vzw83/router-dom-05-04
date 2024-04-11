import {adidasArr, AdidasItem} from "./Adidas";
import {Link, useLocation, useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";
import styles from "../Site.module.css";
import React from "react";
import {abibasArr} from "./Abibas";


type CrossModels = {
    [key: string]: (AdidasItem[] | PumaItem[]);
}

const crossModels: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr,
    abibas: abibasArr
}

export const Model = () => {
    // const params=useParams()
    const {model, id} = useParams();
    const location = useLocation()
    console.log(model)
    //const currentModel=adidasArr.find(el=>el.id===Number(id))
    const currentModel = model
        ? crossModels[model].find((el) => el.id === Number(id))
        : null;

    return (
        <div style={{textAlign: 'center'}}>
            location
            {
                model && location.pathname === `/${model}/${crossModels[model].length}` &&
                // location.pathname === `/adidas/3` &&
                <div style={{backgroundColor: "black", padding: '10px', marginTop: "20px"}}>
                    <div>Может вам посоветовать перейти в раздел ABIDAS</div>
                    <Link to="/abibas" className={styles.LinkLikeButton}>перейти в раздел (ABIBAS)</Link>
                </div>
            }

            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </>
                : <h2>Модель отсутствует</h2>
            }
        </div>
    );
};