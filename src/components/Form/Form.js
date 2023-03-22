import React from "react";
import {useForm} from "react-hook-form";
import {carValidator} from "../../validator";

const Form = () => {

    const {register, handleSubmit, reset, setValue, formState:{isValid}} = useForm({mode:'all', resolver:carValidator});

    return (
        <form>
            <input  />
        </form>
    );
};

export {Form};