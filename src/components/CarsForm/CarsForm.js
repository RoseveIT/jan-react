import React from "react";
import {useForm} from "react-hook-form";

const CarsForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'});


    const submit = (data) =>{
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
}
export {CarsForm};