import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: { params: { scope: 'identify guilds' } },
        })
    ],
    callbacks: {
        async signIn({ account }) {
            const data = await fetch('https://discord.com/api/users/@me/guilds', {
                headers: {
                    Authorization: `Bearer ${account.access_token}`
                }
            })

            const guilds = await data.json()

            if (!guilds.find(guild => guild.id === "850165588969914388")) return false

            return true
        },
    }
})