import { Application } from '../../declarations';
import users from './user-management/user-management.service'
import categoryManagement from './category-management/category-management.service';
import productManagement from './product-management/product-management.service';
import upload from './upload/upload.service';
import getUploadUrl from './get-upload-url/get-upload-url.service';
import accessToken from './access-token/access-token.service';
import roomManagement from './room-management/room-management.service';
import commentManagement from './comment-management/comment-management.service';
import authentication from './authentication/authentication.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(categoryManagement);
  app.configure(productManagement);
  app.configure(upload);
  app.configure(getUploadUrl);
  app.configure(accessToken);
  app.configure(roomManagement);
  app.configure(commentManagement);
  app.configure(authentication);
}