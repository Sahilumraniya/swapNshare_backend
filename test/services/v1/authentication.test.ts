import app from '../../../src/app';

describe('\'v1/authentication\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/authentication');
    expect(service).toBeTruthy();
  });
});
