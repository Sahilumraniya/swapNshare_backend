import { HookContext } from "@feathersjs/feathers";

export const SetUserName = (filedName = 'userName') => async (context: HookContext) => {
    const { params } = context;

    const user = params.user;

    // console.log("User ::", user?.email?.split("@")[0]);


    context.data[filedName] = user?.name ?? user?.email?.split("@")[0];
}