const carsActionTypes ={
    ADD:'ADD',
    DELETE_DY_ID:'DELETE_DY_ID'
}

const carActions = {
    ADD:(item)=>({type:carsActionTypes.ADD, payload:item}),
    DELETE_DY_ID:(id)=>({type:carsActionTypes.DELETE_DY_ID, payload:id})
}

const initialCars = () => []

const myCarReducer = (state, action) =>{
    switch (action.type) {
        case carsActionTypes.ADD:
            const slice = state.slice(-1)
            const id = slice.length?slice[0].id+1:0
            return [...state, {id, ...action.payload}]
        case carsActionTypes.DELETE_DY_ID:
            const  index = state.findIndex(value => value.id === action.payload)
            state.splice(index, 1)
            return [...state]
        default:
            return [...state]
    }
}

export {
    myCarReducer,
    carActions,
    initialCars
}