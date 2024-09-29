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
    create: [FRequired(['email', 'password']),VailidateUser()],
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
    // all: [(err:any)=>{console.log(err);}],
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
