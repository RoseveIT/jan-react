import {Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, PostsPage, UsersPage} from "./pages";
import {Header} from "./components/Header/Header";

const App = () => {
    return (
        <div>
             <Header/>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>

        </div>
    );
};

export {App};