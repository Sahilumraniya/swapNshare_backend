// Initializes the `v1/product` service on path `/v1/product`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Product } from './product.class';
import createModel from './product.model';
import hooks from './product.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/product': Product & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/v1/product', new Product(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/product');

  service.hooks(hooks);
}
