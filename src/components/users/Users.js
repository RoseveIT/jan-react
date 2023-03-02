import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../redux";
import {User} from "../user/User";

const Users = () => {

    const dispatch = useDispatch();

    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(()=>{
        // userService.getAll().then(({data})=>dispatch(userAction.getAll(data)))
        dispatch(userAction.getAll())
    },[dispatch])

    return (
        <div>
            {loading && <h1>LOADING</h1>}

            {errors && JSON.stringify(errors)}

            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};