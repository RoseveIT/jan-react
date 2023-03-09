import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {User} from "../User/User";
import {userActions} from "../../redux/slice";

const Users = () => {

    const {users, errors, loading} = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(()=>{
        // userService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    },[dispatch])

    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && "loading"}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
}

export {Users};