import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const mainLayouts = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-116px)]'>
            <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:md-16'>
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default mainLayouts;