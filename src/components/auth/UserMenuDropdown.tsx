import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import Avatar from '@/components/auth/Avatar';
import { signIn, signOut, useSession } from "next-auth/react"

const UserMenuDropdown = () => {
    const { data: session } = useSession()

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
                <Avatar />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-50 right-0 w-56 p-1 mt-2 origin-top-right bg-white dark:bg-zinc-900 divide-y divide-gray-100 rounded-md shadow-lg dark:shadow-zinc-900 ring-1 ring-black ring-opacity-5 dark:border dark:border-zinc-800 focus:outline-none">
                    {!session && (
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-gray-100 dark:bg-zinc-800 text-neutral-900 dark:text-white' : 'text-neutral-900 dark:text-white'
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`} onClick={() => signIn("discord")}>
                                    Login with Discord
                                </button>
                            )}
                        </Menu.Item>
                    )}
                    {session && (
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-gray-100 dark:bg-zinc-800 text-neutral-900 dark:text-white' : 'text-neutral-900 dark:text-white'
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`} onClick={() => signOut()}>
                                    Sign out
                                </button>
                            )}
                        </Menu.Item>
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    )
};

export default UserMenuDropdown;
