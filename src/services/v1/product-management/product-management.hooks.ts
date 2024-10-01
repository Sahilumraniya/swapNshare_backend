import * as authentication from '@feathersjs/authentication';
import { AddAWSURL } from './hook/AddAWSURL';
import { ProductStatus } from '../../../db_services/v1/product/interfaces/ProductInterface';
import SetDefaultQuery from '../../../hooks/SetDefaultQuery';
import { SearchProduct } from './hook/SearchProduct';
import { SetUserId } from '../../../hooks/SetUserId';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [SetDefaultQuery('status', ProductStatus.ACTIVE)],
    get: [SetDefaultQuery('status', ProductStatus.ACTIVE)],
    create: [authenticate('jwt'), AddAWSURL(),SetUserId()],
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
