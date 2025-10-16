interface UserProfileEntity {
    contact: string,
    role: number,
    branch: string,
    restaurant: string,
    avatar: string,
    is_default_password: boolean,
}

interface UserEntity {
    first_name?: string,
    last_name?: string,
    username: string,
    email?: string,
    profile: UserProfileEntity,
}

export default UserEntity;