import React from "react";
import {UserForm} from "./userForm";
import {Users} from "./Users";

const UserPage = () => {
    return (
        <div>
            <UserForm/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UserPage};