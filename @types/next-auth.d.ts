import BranchEntity from "./entities/BranchEntity";
import RestaurantEntity from "./entities/RestaurantEntity";
import UserEntity from "./entities/UserEntity";

declare module 'next-auth' {
    interface Session {
        access: string,
        user: UserEntity
        branch: BranchEntity,
        restaurant: RestaurantEntity,
        role: number,
    }

    interface User extends Session { }
}

declare module 'next-auth/jwt' {
    interface JWT {
        access: string,
        user: UserEntity
        branch: BranchEntity,
        restaurant: RestaurantEntity,
        role: number,
    }
}