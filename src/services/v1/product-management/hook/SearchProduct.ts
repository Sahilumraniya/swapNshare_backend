import { HookContext } from "@feathersjs/feathers";
import { ProductDBOperations } from "../../../../db_services/v1/product/utils/ProductDBOperations";

export const SearchProduct = () => async (context: HookContext) => {
    const { query } = context.params;

    // console.log(query);

    // context.params.query = {
    //     name: { $regex: /hello/i }
    // }
    // console.log(context.params.query);

    const p = await ProductDBOperations.getDataWithoutPagination({
        dbQuery: {
            name: { $like: '%test%' },
            status: 1
        }
    })

    console.log("P ::", p);


}