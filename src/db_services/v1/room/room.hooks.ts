import { HooksObject } from '@feathersjs/feathers';
import PatchDeleted from '../../../hooks/PatchDeleted';
import { disallow, iff, isProvider } from 'feathers-hooks-common';

export default {
  before: {
    all: [iff(isProvider('server')).else(disallow())],
    find: [],
    get: [],
    create: [],
    update: [disallow()],
    patch: [],
    remove: [PatchDeleted()]
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
