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
})();
