import { HookContext } from "@feathersjs/feathers";
import { UserDBOperations } from "../../../../db_services/v1/users/utils/UserDBOperations";
import { UserStatus } from "../../../../db_services/v1/users/interfaces/UserInterface";
import { BadRequest } from "@feathersjs/errors";
import hashPassword from "@feathersjs/authentication-local/lib/hooks/hash-password";

export const VailidateUser = () => async (context: HookContext) => {
    const { data } = context;

    const { email } = data;

    const user = await UserDBOperations.getDataWithoutPagination({
        dbQuery: {
            email: email,
        }
    })

<<<<<<< HEAD
    console.log(user);


=======
>>>>>>> d0d74a8 (add google auth)
    if (user && user.length) {
        if (user[0].status === UserStatus.ACTIVE) {
            throw new BadRequest("Your Account is already created");
        } else if (user[0].status === UserStatus.INACTIVE) {
            throw new BadRequest("Your Account is Blocked");
        } else {
            const hashPass = await hashPassword("password")(context);
            await UserDBOperations.modifyDatum({
                id: user[0]._id,
                dbBody: {
                    password: hashPass.data.password,
                    status: UserStatus.ACTIVE
                }
            });
        }
    }
}