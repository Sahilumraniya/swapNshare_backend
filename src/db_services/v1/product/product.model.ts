// v1/product-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../../../declarations';
import { Model, Mongoose } from 'mongoose';
import { ProductStatus } from './interfaces/ProductInterface';

export default function (app: Application): Model<any> {
  const modelName = 'product';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    categoryId: { type: Schema.Types.ObjectId, ref: 'category' },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    images: [{ type: String }],
    items: [{ type: [String] }],
    status: { type: Number, default: ProductStatus.ACTIVE, enum: [ProductStatus.ACTIVE, ProductStatus.DELETED, ProductStatus.INACTIVE] }
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
