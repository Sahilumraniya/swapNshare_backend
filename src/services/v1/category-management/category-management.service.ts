// Initializes the `v1/category-management` service on path `/v1/category-management`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { CategoryManagement } from './category-management.class';
import hooks from './category-management.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/category-management': CategoryManagement & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/category-management', new CategoryManagement(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/category-management');

  service.hooks(hooks);
}
