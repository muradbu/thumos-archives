import React from 'react';
import Link from 'next/link'

const Logo = () => {
    return (
        <div className="text-center pt-3 pb-8">
            <Link href="/">
                <a>
                    <h1 className="text-red-700 text-2xl font-bold">The Thumos Archives</h1>
                </a>
            </Link>
            <small className="text-small text-black dark:text-gray-50">Powered by <span className="text-bold text-sky-400"><a href="https://github.com/codepture">Codepture</a></span></small>
        </div>
    )
};

export default Logo;
