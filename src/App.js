import {Route, Routes} from "react-router-dom";

import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {MainLayout} from "./layout";
import {PostDetails} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'posts/:postId'} element={<PostDetails/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </div>
    );
};

export {App};