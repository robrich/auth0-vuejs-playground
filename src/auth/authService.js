import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import { setProfile, logout as authStateLogout } from './authState';

const webAuth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid profile email' // ask for profile and email
});

export function login() {
  webAuth.authorize();
}

export function handleAuthentication(cb) {
  webAuth.parseHash((err, authResult) => {
    if (err) {
      return cb(err);
    }
    setProfile(authResult);
    cb(null);
  })
}

export function logout() {
  authStateLogout();
}
