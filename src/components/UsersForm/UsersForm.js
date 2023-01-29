import React from "react";
import {useForm} from "react-hook-form";
import {jsonService} from "../../services";

const UsersForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode:'all'});

    const submit = async (user) =>{
        await jsonService.createUser(user).then(({data})=>setUsers((prev)=>[...prev, data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register("username")}/>
            <button>Create</button>
        </form>
    );
};

export {UsersForm};