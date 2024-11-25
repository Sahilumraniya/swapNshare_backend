import { HooksObject } from '@feathersjs/feathers';
import * as authentication from '@feathersjs/authentication';
import SetDefaultQuery from '../../../hooks/SetDefaultQuery';
import { RoomStatus } from '../../../db_services/v1/room/interfaces/RoomInterface';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate('jwt')],
    find: [SetDefaultQuery('status', RoomStatus.ACTIVE)],
    get: [SetDefaultQuery('status', RoomStatus.ACTIVE)],
    create: [],
    update: [],
    patch: [],
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
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
