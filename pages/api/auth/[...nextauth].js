import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import client from "@/db/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(client),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
