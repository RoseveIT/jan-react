import React from "react";
import {useForm} from "react-hook-form";
import {carValidator} from "../../validator";

const Form = () => {

    const {register, handleSubmit, reset, setValue, formState:{isValid}} = useForm({mode:'all', resolver:carValidator});

    const save = (car) => {

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <input type='text' placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button disabled={!isValid}>save</button>
        </form>
    );
};

export {Form};

// <input type="text" placeholder={'brand'} {...register('brand')}/>
// <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
// <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
// <button disabled={!isValid}>{carForUpdate?'update':'create'}</button>