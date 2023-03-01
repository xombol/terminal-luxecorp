import React from 'react';
import {Outlet} from 'react-router-dom';
import {HeaderMain} from "../HeaderMain";

export const Layout = () => {
    return (
        <>
            <HeaderMain/>
            <Outlet/>
        </>
    )
}
