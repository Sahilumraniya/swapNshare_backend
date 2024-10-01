import { ObjectId } from "mongoose";

export interface Comment_GET {
    _id: string;
    username: string;
    comment: string;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface Comment_FIND {
    total: number;
    limit: number;
    skip: number;
    data: Comment_GET[];
}

export interface Comment_POST {
    name: string;
    categoryId: ObjectId;
}

export interface Comment_PATCH {
    username?: string;
    comment?: string;
    productId?: ObjectId;
}

export interface Comment_QUERY {
    username?: string;
    comment?: string;
    productId?: ObjectId;
    createdAt?: any;
    updatedAt?: any;
}