import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {carValidator} from "../../validator";
import {carActions} from "../../redux";


const Form = () => {

    const {register, handleSubmit, reset, formState:{isValid}} = useForm({mode:'all', resolver:carValidator});

    const dispatch = useDispatch();

    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <input type='text' placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button disabled={!isValid}>create</button>
        </form>
    );
};

export {Form};

// <input type="text" placeholder={'brand'} {...register('brand')}/>
// <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
// <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
// <button disabled={!isValid}>{carForUpdate?'update':'create'}</button>