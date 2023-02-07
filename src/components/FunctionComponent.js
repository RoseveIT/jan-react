import React, {useEffect, useState} from "react";

const FunctionComponent = ({name}) => {

    console.log('constructor')

    const [state, setState] = useState({a:0, b:25});

    useEffect(()=>{
        console.log('componentDidMount')
        return()=>{
            console.log('componentWillUnmount')
        }
    },[])
    useEffect(()=>{
        console.log('componentDidUpdate')
    },[state])

    const inc = () => {
        setState(prevState => ({a:prevState.a+1, b:prevState.b-1}))
    }

    return (
        <div>
            {console.log('render')}
            <div>A:{state.a}</div>
            <div>B:{state.b}</div>
            <div>name:{name}</div>
            <button onClick={()=>inc()}>click</button>
        </div>
    );
};

export {FunctionComponent};