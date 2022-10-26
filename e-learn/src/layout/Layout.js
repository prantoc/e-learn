import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';
import Header from '../components/Common/Header/Header';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Layout;