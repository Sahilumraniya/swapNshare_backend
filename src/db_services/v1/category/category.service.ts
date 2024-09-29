// Initializes the `v1/category` service on path `/v1/category`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Category } from './category.class';
import createModel from './category.model';
import hooks from './category.hooks';
import { CategoryDBOperations } from './utils/CategoryDBOperations';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/category': Category & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/v1/category', new Category(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/category');

  CategoryDBOperations.initializeService(service);

  service.hooks(hooks);
}
