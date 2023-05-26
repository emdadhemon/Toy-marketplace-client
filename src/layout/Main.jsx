import React from 'react';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer></ToastContainer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;