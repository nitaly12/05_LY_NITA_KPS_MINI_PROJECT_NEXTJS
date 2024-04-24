import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    providers:[
        //login by email and password
        CredentialsProvider({
            async authorize(userInfo) {
              console.log("userInfo ", userInfo)
                const newUserInfo = {
                    email: userInfo.email,
                    password: userInfo.password,
                };
                //call login service
                const login = await loginService(newUserInfo);
                console.log(login)
                if(login.status===400){
                  throw new Error(login.detail)
                }
                return login;
            }, 
        }),
    ],
    //used to set token in cookies
    callbacks: {
        async jwt({ token, user }) {
          return { ...token, ...user };
        },
        async session({ session, token }) {
          session.user = token;
          return session;
        },
      },
    //calling secret key
    secret: process.env.NEXTAUTH_SECRET,
};
const handler = nextAuth(authOption);
export{handler as GET, handler as POST};