// Initializes the `v1/comment-management` service on path `/v1/comment-management`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { CommentManagement } from './comment-management.class';
import hooks from './comment-management.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/comment-management': CommentManagement & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/comment-management', new CommentManagement(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/comment-management');

  service.hooks(hooks);
}
