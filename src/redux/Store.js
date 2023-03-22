import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slice";

const root = combineReducers({
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: root
});

export {setupStore}