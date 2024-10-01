import { ObjectId } from "mongoose";

export enum RoomStatus {
    ACTIVE = 1,
    INACTIVE = 0,
    DELETED = -1
}

export interface Room_GET {
    _id: string;
    roomId: string;
    userId: ObjectId;
    topic: string;
    status: RoomStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface Room_FIND {
    total: number;
    limit: number;
    skip: number;
    data: Room_GET[];
}

export interface Room_POST {
    name: string;
    description?: string;
    image: string;
}

export interface Room_PATCH {
    roomId?: string;
    userId?: ObjectId;
    topic?: string;
    status?: RoomStatus;
}

export interface Room_QUERY {
    roomId?: any;
    userId?: any;
    topic?: any;
    status?: any;
    createdAt?: any;
    updatedAt?: any;
}