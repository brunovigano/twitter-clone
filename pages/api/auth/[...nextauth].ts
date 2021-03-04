import NextAuth from "next-auth"
import Adapters from "next-auth/adapters"
import Providers from "next-auth/providers"
import prisma from "../../../lib/clients/prisma"

const options = {
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_KEY,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
}

export default NextAuth(options)
