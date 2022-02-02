import Layout from '@/components/common/Layout/Layout';
import React from 'react';

const index = () => {
  return (
    <Layout>
      <p className="text-neutral-900 dark:text-white">
        The Thumos Archives is a fan project made by <a className="text-sky-600 font-semibold" href="https://github.com/muradbuyukasik">Murad</a> for the High Thumos men's group founded by Elisha Long.
      </p>
      <div className="flex flex-col mt-6 space-y-4">
        <a className="text-center text-2lg text-white font-bold bg-red-800 hover:bg-red-900 shadow-md rounded-md py-2" href="https://www.youtube.com/c/ElishaLong">Subscribe to Elisha Long on YouTube</a>
        <a className="text-center text-2lg text-white font-bold bg-red-800 hover:bg-red-900 shadow-md rounded-md py-2" href="https://www.patreon.com/HighThumos">Join the High Thumos Discover server</a>
      </div>
    </Layout>
  )
};

export default index;
