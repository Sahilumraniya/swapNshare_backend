// users-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../../../declarations';
import { Model, Mongoose } from 'mongoose';
import { UserRole, UserStatus } from './interfaces/UserInterface';

export default function (app: Application): Model<any> {
  const modelName = 'users';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const schema = new mongooseClient.Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String, },
    role: {
      type: String, default: UserRole.USER,
      enum: [UserRole.USER, UserRole.ADMIN]
    },
    acessToken: { type: String, default: null },
    status: {
      type: Number, default: UserStatus.ACTIVE,
      enum: [UserStatus.ACTIVE, UserStatus.INACTIVE, UserStatus.DELETED]
    },
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
