import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <Logo />
            <main>
                {children}
            </main>
            <NavBar />
        </>
    )
};

export default Layout;
