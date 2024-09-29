import app from '../../../src/app';

describe('\'v1/getUploadUrl\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/get-upload-url');
    expect(service).toBeTruthy();
  });
});
