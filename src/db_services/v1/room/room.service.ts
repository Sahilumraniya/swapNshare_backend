// Initializes the `v1/room` service on path `/v1/room`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Room } from './room.class';
import createModel from './room.model';
import hooks from './room.hooks';
import { RoomDBOperations } from './utils/RoomDBOperations';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/room': Room & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/v1/room', new Room(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/room');

  RoomDBOperations.initializeService(service);

  service.hooks(hooks);
}
