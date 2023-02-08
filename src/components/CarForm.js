import React from "react";
import {useForm} from "react-hook-form";
import {useAppReducer} from "../hooks/useAppReducer";
import {carActions} from "../reducers/carReducer";

const CarForm = () => {

    const {register, reset, handleSubmit} = useForm();

    const [, dispatch] = useAppReducer(value=>value.carReducer);
    const save = (car) => {
        dispatch(carActions.ADD(car))
        reset()
    };
    return (
        <form onClick={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};