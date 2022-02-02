import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react"

const AuthButton = () => {
    const { data: session } = useSession()

    if (!session) return (
        <button className="bg-blue-500 py-3 px-4 rounded-md" onClick={() => signIn("discord")}>
            Login with Discord
        </button>
    )

    return (
        <button className="bg-blue-500 py-3 px-4 rounded-md" onClick={() => signOut()}>
            Sign out
        </button>
    )
}

export default AuthButton