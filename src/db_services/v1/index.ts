import { Application } from "../../declarations";
import users from "./users/users.service";
import product from './product/product.service';
import category from './category/category.service';

export default function (app: Application): void {
    app.configure(users);
    app.configure(product);
    app.configure(category);
}