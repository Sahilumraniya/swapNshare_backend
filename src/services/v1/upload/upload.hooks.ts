import * as feathersAuthentication from '@feathersjs/authentication';
import { uploadFile } from './hooks/uploadFile';
import { HookContext } from '@feathersjs/feathers';
import { S3Utilities } from '../../../utils/UploadUtilities/S3Utilities';
import { BadRequest } from '@feathersjs/errors';

const { authenticate } = feathersAuthentication.hooks;

export default {
    before: {
        all: [
            /*authenticate('jwt')*/
        ],
        find: [],
        get: [],
        create: [uploadFile()],
        update: [],
        patch: [],
        remove: [async (context: HookContext) => {
            const { id } = context;

            // console.log("Delete ::", id);

            const fileName = id?.toString().split("/").pop();

            // console.log("Filename ::", fileName);


            if (!id) {
                throw new BadRequest("please give fileName");
            }

            S3Utilities.deleteFile(fileName!);


            context.result = {
                "meassage": "file sucessflly deleted"
            }
        }],
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
