// Initializes the `v1/room-management` service on path `/v1/room-management`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { RoomManagement } from './room-management.class';
import hooks from './room-management.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/room-management': RoomManagement & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/room-management', new RoomManagement(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/room-management');

  service.hooks(hooks);
}
