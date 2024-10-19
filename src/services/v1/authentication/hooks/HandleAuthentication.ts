import { HookContext } from "@feathersjs/feathers";
import { jwtDecode } from "jwt-decode";
import { UserDBOperations } from "../../../../db_services/v1/users/utils/UserDBOperations";

export const HandleAuthentication = () => async (context: HookContext) => {
    const { data, app } = context;
    const { strategy } = data;

    switch (strategy) {
        case 'local':
            const { email, password } = data;
            const result = await app.service('authentication').create({
                strategy,
                email,
                password
            });
            context.result = result;
            break;
        case 'google':
            const { payload } = data;
            const tokenData: {
                email: string;
                name: string;
                sub: string;
            } = jwtDecode(payload);
            let finalUser;
            const user = await UserDBOperations.getDataWithoutPagination({
                dbQuery: {
                    email: tokenData.email
                }
            });
            if (user.length === 0) {
                finalUser = await UserDBOperations.createDatum({
                    dbBody: {
                        email: tokenData.email,
                        name: tokenData.name,
                        googleId: tokenData.sub
                    }
                });
            } else {
                finalUser = user[0];
            }
            const accessToekn = await app.service('authentication').createAccessToken({
                sub: finalUser._id,
            });
            context.result = {
                accessToekn,
                user: finalUser
            };
            break;
        default:
            break;
    }
}