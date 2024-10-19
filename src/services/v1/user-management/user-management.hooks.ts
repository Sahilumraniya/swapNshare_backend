import { HooksObject } from '@feathersjs/feathers';
import SetDefaultQuery from '../../../hooks/SetDefaultQuery';
import { UserStatus } from '../../../db_services/v1/users/interfaces/UserInterface';
import FRequired from '../../../hooks/FRequired';
import { CheckRole } from './hooks/CheckRole';
import { VailidateUser } from './hooks/VailidateUser';

export default {
  before: {
    all: [],
    find: [SetDefaultQuery('status', UserStatus.ACTIVE)],
    get: [],
    create: [FRequired(['name', 'email', 'password']), VailidateUser()],
    update: [],
    patch: [CheckRole()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
<<<<<<< HEAD
    // all: [(err:any)=>{console.log(err);}],
=======
    // all: [(err: any) => { console.log(err); }],
>>>>>>> d0d74a8 (add google auth)
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
