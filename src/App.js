import {Route, Routes, useNavigate} from "react-router-dom";

import {UserPage} from "./components/UserPage";
import {CarPage} from "./components/CarPage";

const App = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={()=>navigate('/users')}>users</button>
                <button onClick={()=>navigate('/cars')}>cars</button>
            </div>
            <hr/>
            <Routes>
                <Route path={'/users'} element={<UserPage/>}/>
                <Route path={'/cars'} element={<CarPage/>}/>
            </Routes>
        </div>
    );
};

export {App};