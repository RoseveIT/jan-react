import React, {createContext, useReducer} from "react";
import {initialUsers, myUserReducer} from "../reducers/userReducer";

const StateContext = createContext(null);

const StateProvider = ({children}) => {

    const reducers = {
        userReducer:useReducer(myUserReducer, null, initialUsers)
        // carReducer:useReducer()
    }

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {StateProvider, StateContext};