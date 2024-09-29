export enum UserStatus {
    ACTIVE = 1,
    INACTIVE = 0,
    DELETED = -1
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export interface User_GET {
    _id: string;
    email: string;
    role: UserRole;
    acessToken: string;
    status: UserStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface User_FIND {
    total: number;
    skip: number;
    limit: number;
    data: Array<User_GET>;
}

export interface User_POST {
    email: string;
    password: string;
    role?: UserRole;
    acessToken?: string;
    status?: UserStatus;
}

export interface User_PATCH {
    email?: string;
    password?: string;
    role?: UserRole;
    acessToken?: string;
    status?: UserStatus;
}

export interface User_QUERY {
    email?: any;
    role?: any;
    status?: any;
    accessToken?: any;
    createdAt?: any;
    updatedAt?: any;
}