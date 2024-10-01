import app from '../../../src/app';

describe('\'v1/room-management\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/room-management');
    expect(service).toBeTruthy();
  });
});
