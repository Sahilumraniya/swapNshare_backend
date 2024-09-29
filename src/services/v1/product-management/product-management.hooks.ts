import * as authentication from '@feathersjs/authentication';
import { AddAWSURL } from './hook/AddAWSURL';
import { ProductStatus } from '../../../db_services/v1/product/interfaces/ProductInterface';
import SetDefaultQuery from '../../../hooks/SetDefaultQuery';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [SetDefaultQuery('status', ProductStatus.ACTIVE)],
    get: [SetDefaultQuery('status', ProductStatus.ACTIVE)],
    create: [authenticate('jwt'), AddAWSURL()],
    update: [],
    patch: [authenticate('jwt'), AddAWSURL()],
    remove: [authenticate('jwt')]
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
