# Issue

`publicRuntimeConfig` (ie. [Runtime Configuration](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration)) doesn't work when doing client-side navigation; it only works when loading a page directly.

# Steps to reproduce

1. Clone this repo.
2. Run `npm run build`.
3. Run `RUNTIME_VAR=test123 npm run start`.
4. Go to http://localhost:3000 and click the link *Click here to test runtime var* which navigates to http://localhost:3000/test. See that the *Runtime var* text is empty.
5. Now, refresh the page or load http://localhost:3000/test directly and see that *Runtime var* correctly displays `test123`.
