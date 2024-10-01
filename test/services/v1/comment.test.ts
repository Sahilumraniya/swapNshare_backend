import app from '../../../src/app';

describe('\'v1/comment\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/comment');
    expect(service).toBeTruthy();
  });
});
