import { authApi } from "@/lib/axios_options";
import { isAxiosError } from "axios";
import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import Endpoints from "@/utils/misc/endpoints";

const options: NextAuthOptions = {
    jwt: {
        maxAge: 60 * 60 * 24,
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/login',
        signOut: '/auth/login',
    },
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                username: {},
                password: {}
            },
            authorize: async (credentials, _) => {
                try {
                    const data = {
                        username: credentials?.username,
                        password: credentials?.password,
                    }
                    const res = await authApi.post(Endpoints.auth.login, data,)
                    return res.data;
                }
                catch (err) {
                    if (isAxiosError(err)) {
                        const errorMessage = err.response?.data['errors']['detail'];
                        throw new Error(errorMessage)
                    }
                    throw new Error("Invalid email and/or password")
                }
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.access = user.access;
                token.user = user.user;
            }
            return token;
        },
        session: ({ session, token, user }) => {
            if (token) {
                session.access = token.access;
                session.user = token.user;
            }
            return session;
        }
    }
}

export default options;