import BottomNavbar from '@/components/common/BottomNavbar/BottomNavbar';
import Logo from '@/components/common/Logo/Logo';
import TopNavbar from '@/components/common/TopNavbar/TopNavbar';
import React from 'react';

type Props = {
    center?: boolean,
    children
}

const Layout = ({ center, children }: Props) => {
    return (
        <>
            <TopNavbar />
            <main className={center && "text-center"}>
                {children}
            </main>
            <BottomNavbar />
        </>
    )
};

export default Layout;
