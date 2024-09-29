import app from '../../../src/app';

describe('\'v1/access-token\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/access-token');
    expect(service).toBeTruthy();
  });
});
