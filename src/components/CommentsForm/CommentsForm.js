import React from "react";
import {useForm} from "react-hook-form";
import {jsonService} from "../../services";

const CommentsForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode:'all'});

    const submit = async (comment) => {
        await jsonService.createComment(comment).then(({data})=>setComments((prev)=>[...prev,data]))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder='name' {...register('name')}/>
            <button>Create</button>
        </form>
    );
};

export {CommentsForm};