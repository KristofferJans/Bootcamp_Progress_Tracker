import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db/mongodb";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  debug: true,

  callbacks: {
    async session({ session, user }) {
      // console.log(token.userId);
      session.user.userId = user.userId;
      session.user.finishedChallenges = user.finishedChallenges;
      session.user.progress = user.progress;
      return session;
    },
  },
};

export default NextAuth(authOptions);
