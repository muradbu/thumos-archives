import React from 'react';
import Link from 'next/link'

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <a>
                    <h1 className="text-red-700 text-2xl font-bold">The Thumos Archives</h1>
                </a>
            </Link>
        </div>
    )
};

export default Logo;
