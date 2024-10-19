<<<<<<< HEAD
import { ServiceAddons } from '@feathersjs/feathers';
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';
import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOauth } from '@feathersjs/authentication-oauth';

=======
import { Params, ServiceAddons } from '@feathersjs/feathers';
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';
import { LocalStrategy } from '@feathersjs/authentication-local';
>>>>>>> d0d74a8 (add google auth)
import { Application } from './declarations';

declare module './declarations' {
  interface ServiceTypes {
    'authentication': AuthenticationService & ServiceAddons<any>;
  }
}

<<<<<<< HEAD
export default function(app: Application): void {
=======
export default function (app: Application): void {
>>>>>>> d0d74a8 (add google auth)
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);
<<<<<<< HEAD
  app.configure(expressOauth());
=======

>>>>>>> d0d74a8 (add google auth)
}
