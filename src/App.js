import {Posts} from "./components";
import {Users} from "./components/jsonplaceholder/users/Users";
import {Comments} from "./components/jsonplaceholder/comments/Comments";

const App = () => {
    return (
        <div>
            {/*<Posts/>*/}
            {/*<Users/>*/}
            <Comments/>
        </div>
    );
};

export {App};