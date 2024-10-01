// Initializes the `v1/comment` service on path `/v1/comment`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Comment } from './comment.class';
import createModel from './comment.model';
import hooks from './comment.hooks';
import { CommentDBOperations } from './utils/CommentDBOperations';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/comment': Comment & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/v1/comment', new Comment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/comment');
  CommentDBOperations.initializeService(service);

  service.hooks(hooks);
}
