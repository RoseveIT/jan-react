import React from "react";

import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            <a href="/">home</a>
            <a href="/users">users</a>
            <a href="/posts">posts</a>
        </div>
    );
};

export {Header};