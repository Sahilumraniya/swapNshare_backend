import { HooksObject } from '@feathersjs/feathers';
import { disallow, iff, isProvider } from 'feathers-hooks-common';
import PatchDeleted from '../../../hooks/PatchDeleted';
import hashPassword from '@feathersjs/authentication-local/lib/hooks/hash-password';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [hashPassword('password')],
    update: [disallow()],
    patch: [hashPassword('password')],
    remove: [PatchDeleted()],
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
