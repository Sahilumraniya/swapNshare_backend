import { HookContext } from "@feathersjs/feathers";

export const AddAWSURL = () => (context: HookContext) => {
    const { data } = context;

    context.data = {
        ...context.data,
        images: data.images.map((i: string) => `https://swapnshare.s3.ap-south-1.amazonaws.com/images/${i}`)
    }
}