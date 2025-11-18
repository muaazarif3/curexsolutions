import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';


// -------------------------
// Layout: fixed header & footer
// -------------------------
function Layout() {
    return (
        <div className="min-h-screen flex flex-col">

            <Header />
            <Outlet />
            <Footer />


        </div>
    );
}
export default Layout;