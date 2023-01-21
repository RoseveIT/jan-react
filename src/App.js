import {Comments, Posts, Spaceships, Users} from "./components";
import {UsersPosts} from "./components/usersPosts/UsersPosts";


const App = () => {
    return (
        <div>
            {/*<Posts/>*/}
            {/*<Users/>*/}
            {/*<Comments/>*/}
            {/*<Spaceships/>*/}
            <UsersPosts/>
        </div>
    );
};

export {App};