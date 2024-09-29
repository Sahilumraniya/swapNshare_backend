// Initializes the `v1/users` service on path `/v1/users`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Users } from './users.class';
import createModel from './users.model';
import hooks from './users.hooks';
import { UserDBOperations } from './utils/UserDBOperations';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/users': Users & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/v1/users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/users');

  UserDBOperations.initializeService(service);

  service.hooks(hooks);
}
