import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars:[],
    setUpdateCar:null,
    errors: null,
    loading: null
}


const getAll = createAsyncThunk(
    'carSlice/getAll'
    async ()
);


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder =>
        builder

})

const {reducer:carReducer} = carSlice

const carAction ={

}

export {
    carReducer,
    carAction,
    carSlice
}