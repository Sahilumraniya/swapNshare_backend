import { HookContext, HooksObject } from '@feathersjs/feathers';
import { S3Utilities } from '../../../utils/UploadUtilities/S3Utilities';
import FRequired from '../../../hooks/FRequired';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [FRequired(['fileNames']), async (context: HookContext) => {
      const { data } = context;
      // console.log("ata ::", data);
      const url = await S3Utilities.getPutUrl(data.fileNames);
      context.result = {
        uploadURL: url
      }
    }],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
