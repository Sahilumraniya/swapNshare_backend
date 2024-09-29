import { ObjectId } from "mongoose";

export enum ProductStatus{
    ACTIVE = 1,
    INACTIVE = 0,
    DELETED = -1
}

export interface Product_GET{
    _id: string;
    name: string;
    description?: string;
    quantity: number;
    price: number;
    offerPrice: number;
    categoryId: ObjectId;
    subCategoryId: ObjectId;
    brandId: ObjectId;
    images: string[];
    status: ProductStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface Product_FIND{
    total: number;
    limit: number;
    skip: number;
    data: Product_GET[];
}

export interface Product_POST{
    name: string;
    categoryId: ObjectId;
}

export interface Product_PATCH{
    name?: string;
    categoryId?: ObjectId;
    status?: ProductStatus;
}

export interface Product_QUERY{
    name?: any;
    categoryId?: any;
    status?: any;
    createdAt?: any;
    updatedAt?: any;
}