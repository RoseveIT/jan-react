import React from "react";
import {useAppReducer} from "../hooks/useAppReducer";
import {carActions} from "../reducers/carReducer";

const Car = ({car}) => {

    const {id, brand, year, price} = car

    const [, dispatch] = useAppReducer(value=>value.carReducer);

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <button onClick={()=>dispatch(carActions.DELETE_DY_ID(id))}>delete</button>
        </div>
    );
};

export {Car};