import EventEmitter from 'EventEmitter';

// FRAGILE: this is a stateful singleton
// TODO: move this into Vuex

export const authNotifier = new EventEmitter();

export function setProfile(authResult) {
  // Set the time that the access token will expire at
  let expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
  let profile = {};
  ['name', 'given_name', 'nickname', 'family_name', 'picture', 'email', 'email_verified', 'sub', 'aud'].forEach(p => profile[p] = authResult.idTokenPayload[p]);
  localStorage.setItem('profile', JSON.stringify(profile));
  authNotifier.emit('change', { authenticated: true, profile });
}

export function logout() {
  // Clear localStorage
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  localStorage.removeItem('profile');
  authNotifier.emit('change', { authenticated: false, profile: {} });
}

export function isAuthenticated() {
  // Check whether token expired
  // localStorage doesn't have it?  1 < undefined === false
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}

export function getProfile() {
  // return an empty object so bindings don't fail
  if (!isAuthenticated()) {
    return {};
  }
  let profile = JSON.parse(localStorage.getItem('profile'));
  return profile || {};
}
