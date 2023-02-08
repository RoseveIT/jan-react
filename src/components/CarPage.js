import React from "react";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};