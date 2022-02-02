import UserMenuDropdown from '@/components/auth/UserMenuDropdown';
import Logo from '@/components/common/Logo/Logo';
import React from 'react';

const TopNavbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center py-4">
                <Logo />
                <UserMenuDropdown />
            </nav>
        </header>
    )
};

export default TopNavbar;
