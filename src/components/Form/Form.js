import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validator";
import css from './Form.module.css'


const Form = () => {

    const {register, handleSubmit, reset, setValue, formState:{isValid}} = useForm({mode:'all', resolver:joiResolver(carValidator)});

    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    },[carForUpdate])

    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    }

    const update = async (car) => {
        await dispatch(carActions.updateById({id:carForUpdate.id, car}))
        reset()
    }

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input className={css.input} type='text' placeholder={'brand'} {...register('brand')}/>
                <input className={css.input} type='text' placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                <input className={css.input} type='text' placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                <button disabled={!isValid}>{carForUpdate?'update':'save'}</button>
            </form>
        </div>
    );
};

export {Form};

// <input type="text" placeholder={'brand'} {...register('brand')}/>
// <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
// <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
// <button disabled={!isValid}>{carForUpdate?'update':'create'}</button>