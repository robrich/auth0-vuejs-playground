# Auth0 Vue.js Login

This sample, evolved from an Auth0 Quickstart, demonstrates how to add authentication to a Vue.js application with Auth0. The sample makes use of Auth0's hosted login page which provides centralized authentication.

## Getting Started

1. Sign up or login to [Auth0](https://auth0.com/signup).
2. Set **Allowed Callback URLs** in settings section to `http://localhost:8080/callback`
3. Clone or download the repo.
4. Install npm packages using `npm` or `yarn`.

```bash
npm install
```

## Set the Client ID and Domain

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Switch to the Settings section.
3. Rename `src/auth/auth0-variables.js-example` to `src/auth/auth0-variables.js`.
4. Copy the **domain** and **client ID** from the Auth0 portal into place.

```js
export const AUTH_CONFIG = {
  clientId: 'CHANGE_ME', // <-- change this
  domain: 'CHANGE_ME.auth0.com', // <-- change this
  callbackUrl: 'http://localhost:8080/callback',
  apiUrl: 'API_IDENTIFIER'
};
```

## Run the Application

```bash
npm start
```

The application will be served at [`http://localhost:8080`](http://localhost:8080).

## Author

This project is a fork of a Quickstart created by [Auth0](https://auth0.com/).

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
