// v1/room-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../../../declarations';
import { Model, Mongoose } from 'mongoose';
import { RoomStatus } from './interfaces/RoomInterface';

export default function (app: Application): Model<any> {
  const modelName = 'room';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    roomId: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    topic: { type: String },
    status: { type: Number, default: RoomStatus.ACTIVE, enum: [RoomStatus.ACTIVE, RoomStatus.DELETED, RoomStatus.INACTIVE] }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
