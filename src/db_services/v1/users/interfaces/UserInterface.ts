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
    name: string;
    email: string;
    role: UserRole;
    googleId: string;
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
    name: string;
    email: string;
    password?: string;
    role?: UserRole;
    googleId?: string;
    acessToken?: string;
    status?: UserStatus;
}

export interface User_PATCH {
    name?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    googleId?: string;
    acessToken?: string;
    status?: UserStatus;
}

export interface User_QUERY {
    name?: string;
    email?: any;
    role?: any;
    status?: any;
    googleId?: any;
    accessToken?: any;
    createdAt?: any;
    updatedAt?: any;
}