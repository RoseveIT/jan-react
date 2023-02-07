import {ClassComponents} from "./components/ClassComponents";
import {useState} from "react";
import {FunctionComponent} from "./components/FunctionComponent";

const App = () => {
    const [flag, setFlag] = useState(true);

    return (
        <div>
            {/*{flag && <ClassComponents name={'max'}/>}*/}
            {flag && <FunctionComponent name={'max'}/>}
            <button onClick={()=>setFlag(prev=>!prev)}>hide</button>
        </div>
    );
};

export {App};