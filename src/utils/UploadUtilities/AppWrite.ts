import { Application } from "../../declarations";
import sdk, { ID } from "node-appwrite";
// import { Client, ID , Storage } from "appwrite";

export class AppWrite {

    private static _projectId: string;
    private static _bucket_id: string;
    private static _storage: sdk.Storage;


    static initializeAppWrite(app: Application) {
        const appwriteConfig = app.get("appwrite");
        AppWrite._bucket_id = appwriteConfig.bucket_id;
        AppWrite._projectId = appwriteConfig.project_id;

        // console.log("appconfig :",appwriteConfig,AppWrite._bucket_id,AppWrite._projectId);


        const client = new sdk.Client().setEndpoint(appwriteConfig.url).setProject(AppWrite._projectId);

        AppWrite._storage = new sdk.Storage(client);

    }

    static async uploadFile(file: any) {
        if (!file) {
            throw new Error("No file provided.");
        }

        // Inspect the entire file object structure
        console.log("File object: ", file);

        // Check if size exists
        if (file.size) {
            console.log("File size:", file.size);
        } else {
            console.error("Error: file.size is undefined");
        }

        file = {}

        try {
            return await AppWrite._storage.createFile(AppWrite._bucket_id,ID.unique(),file);
        } catch (error) {
            console.error("Error during file upload:", error);
        }
    }



    static async deleteFile(fileId: string) {
        return await AppWrite._storage.deleteFile(AppWrite._bucket_id, fileId);
    }

    static async previewFile(fileId: string) {
        return await AppWrite._storage.getFilePreview(AppWrite._bucket_id, fileId);
    }

}