import { BadRequest } from "@feathersjs/errors";
import { HookContext } from "@feathersjs/feathers"
import { AppWrite } from "../../../../utils/UploadUtilities/AppWrite";
import { Multer } from "multer";

export const uploadFile = () => async (context: HookContext) => {
    const { app, data } = context;
    const files: Express.Multer.File[] = data.files;

    console.log("File :: ", files);


    const uploadFile: any = [];

    if (!files) throw new BadRequest("Please provide a vaild file");

    for (const file of files) {
        try {
            console.log("si ::", file.size);

            const uploadData = await AppWrite.uploadFile(file);
            console.log("Upload data ::", uploadData);
            uploadFile.push(uploadData);
        }
        catch (err: any) {
            console.log('Error:', err);

        }
    }

    console.log("upload ::", uploadFile);

}