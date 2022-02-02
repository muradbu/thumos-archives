import React from 'react'
import { useSession } from 'next-auth/react'
import { UserCircleIcon } from '@heroicons/react/solid'

const Avatar = () => {
    const { data: session, status } = useSession()
    const loading = status === 'loading'

    if (!session && loading) return null

    if (!session) return <UserCircleIcon className="text-white w-10 h-10" />

    return <img src={session.user.image} className="rounded-full w-10 h-10" />
};

export default Avatar;
