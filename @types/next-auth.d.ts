import UserEntity from "./entities/UserEntity";

declare module 'next-auth' {
    interface Session {
        access: string,
        user: UserEntity
    }

    interface User extends Session { }
}

declare module 'next-auth/jwt' {
    interface JWT {
        access: string,
        user: UserEntity
    }
}