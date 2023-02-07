import {Component} from "react";

class ClassComponents extends Component{
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {a:0, b:25}
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        console.log('prevProps')
        console.log('prevProps')
        console.log('snapshot')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.a >= 7){
            return 'a>=7'
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    inc(){
        this.setState(prev => ({a: prev.a + 1, b: prev.b - 1}))
    }


    render() {
        console.log('render')
        return(
            <div>
                <div>A:{this.state.a}</div>
                <div>B:{this.state.b}</div>
                <div>name:{this.props.name}</div>
                <button onClick={()=>this.inc()}>click</button>
            </div>
        )
    }

}

export {ClassComponents}