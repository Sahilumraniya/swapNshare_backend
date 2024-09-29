import { HookContext } from "@feathersjs/feathers";
import { UserRole } from "../../../../db_services/v1/users/interfaces/UserInterface";

export const CheckRole = () => async (context: HookContext) => {
    const { data } = context;
    
    if (data.role === UserRole.ADMIN) {
        throw new Error('You are not allowed to create admin user.');
    }
}