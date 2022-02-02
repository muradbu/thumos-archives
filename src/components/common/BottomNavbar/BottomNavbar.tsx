import Link from 'next/link';
import React from 'react';

const navItems = [
    ['Home', '/'],
    ['Lore', '/lore'],
]

const BottomNavbar = () => {
    return (
        <nav className="absolute inset-x-0 bottom-0 z-50 w-full border-t py-3 bg-white dark:bg-zinc-900 dark:border-zinc-800">
            <ul className="flex justify-evenly">
                {
                    navItems.map(([title, url]) => (
                        <li className="text-neutral-900 dark:text-white">
                            <Link href={url}>
                                <a>
                                    {title}
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};

export default BottomNavbar;
