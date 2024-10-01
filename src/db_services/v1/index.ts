import { Application } from "../../declarations";
import users from "./users/users.service";
import product from './product/product.service';
import category from './category/category.service';
import room from './room/room.service';
import comment from './comment/comment.service';

export default function (app: Application): void {
    app.configure(users);
    app.configure(product);
    app.configure(category);
    app.configure(room);
    app.configure(comment);
}