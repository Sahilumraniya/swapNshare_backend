import app from '../../../src/app';

describe('\'v1/room\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/room');
    expect(service).toBeTruthy();
  });
});
