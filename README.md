# Update RingCentral extension demo

## Setup

copy `.env.sample` as `.env`, edit it to specify credentials.

```
yarn install
```

## Run

```
yarn test
```

## Conclusion

For SSO enabled customers, you cannot specify password because password is not allowed. "Credentials changing is not allowed".

You should specify "NotActivated" instead of "Enabled", otherwise API will complain "parameter password invalid".

I don't think it is an ideal solution. It is a workaround instead.
