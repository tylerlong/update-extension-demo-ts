import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
});

rc.token = {access_token: process.env.RINGCENTRAL_ACCESS_TOKEN};

(async () => {
  const ext = await rc
    .restapi()
    .account()
    .extension(process.env.RINGCENTRAL_EXTENSION_ID)
    .get();
  console.log(JSON.stringify(ext, null, 2));

  await rc
    .restapi()
    .account()
    .extension(process.env.RINGCENTRAL_EXTENSION_ID)
    .put({
      status: 'Enabled',
      extensionNumber: '222', // leave this or make sure the number are not being used
      contact: {
        firstName: 'Demo',
        lastName: 'Automated',
        company: 'Test',
        jobTitle: 'consultant',
        email: 'valid.email@address.com',
        emailAsLoginName: true,
      },
      password: 'MyAwes0mePassw0rd',
    });
  console.log('done');
})();
