import app from '../../../src/app';

describe('\'v1/comment-management\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/comment-management');
    expect(service).toBeTruthy();
  });
});
