export enum CategoryStatus{
    ACTIVE = 1,
    INACTIVE = 0,
    DELETED = -1
}

export interface Category_GET{
    _id: string;
    name: string;
    description?: string;
    image: string;
    status: CategoryStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface Category_FIND{
    total: number;
    limit: number;
    skip: number;
    data: Category_GET[];
}

export interface Category_POST{
    name: string;
    description?: string;
    image: string;
}

export interface Category_PATCH{
    name?: string;
    description?: string;
    image?: string;
    status?: CategoryStatus;
}

export interface Category_QUERY{
    name?: any;
    description?: any;
    image?: any;
    status?: any;
    createdAt?: any;
    updatedAt?: any;
}