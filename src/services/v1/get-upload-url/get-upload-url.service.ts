// Initializes the `v1/getUploadUrl` service on path `/v1/get-upload-url`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { GetUploadUrl } from './get-upload-url.class';
import hooks from './get-upload-url.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/get-upload-url': GetUploadUrl & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/get-upload-url', new GetUploadUrl(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/get-upload-url');

  service.hooks(hooks);
}
