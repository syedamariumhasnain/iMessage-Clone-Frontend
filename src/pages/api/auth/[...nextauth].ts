import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
 
const prisma = new PrismaClient()
 
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ]
})

// ... as string --- type-casting is not a good practice in general
//  BUT here we surly know that we have the env variables
//  and we are sure that they are strings

// Next Auth communicate with MongoDB database via Prisma Adapter
// Prisma acts as middleman between Next JS app and MongoDB database