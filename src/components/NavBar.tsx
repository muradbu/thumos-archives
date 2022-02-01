import Link from 'next/link';
import React from 'react';

const navigationItems = [
    {
        text: "Login with Discord to add entries",
        to: "/login"
    },
]

const NavBar = () => {
    const items = navigationItems.map(val => <NavItem text={val.text} to={val.to} />)

    return (
        <nav className="absolute inset-x-0 bottom-0 z-50 w-full border-t py-4 bg-white dark:bg-slate-900 dark:border-slate-600">
            <ul className="flex justify-evenly">
                {items}
            </ul>
        </nav>
    )
};

const NavItem = ({ text, to }) => {
    return (
        <Link href={to}>
            <a className="hover:text-sky-500 dark:hover:text-sky-400 text-black dark:text-white">
                <li className="bg-green-700 py-2 px-4 rounded-md">
                    {text}
                </li>
            </a>
        </Link>
    )
}

export default NavBar;
