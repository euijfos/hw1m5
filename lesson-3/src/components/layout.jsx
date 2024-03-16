import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Posts page</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/form"}>Form page</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <footer>footer</footer>
        </>
    );
}

export default Layout;