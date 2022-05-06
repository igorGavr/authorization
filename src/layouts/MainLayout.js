import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h1>Header</h1>
            <Outlet/>
        </div>
    );
};

export {MainLayout};