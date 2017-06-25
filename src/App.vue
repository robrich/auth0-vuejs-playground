<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Auth0 - Vue</router-link>

          <router-link to="/"
            class="btn btn-primary btn-margin">
              Home
          </router-link>

          <router-link
            to="/login"
            class="btn btn-primary btn-margin"
            v-if="!authenticated">
            Log In
          </router-link>

          <router-link
            to="/logout"
            class="btn btn-primary btn-margin"
            v-if="authenticated">
            Log Out
          </router-link>

          <router-link to="/admin" class="btn btn-primary btn-margin">
            Admin
          </router-link>

        </div>
        <div class="navbar-right" v-if="authenticated">

          <img :src="profile.picture" v-if="profile.picture" class="profilepic" />
          <label class="navbar-text">
            Welcome {{profile.given_name}}
          </label>

        </div>
      </div>
    </nav>

    <div class="container">
      <router-view
        :authenticated="authenticated"
        :profile="profile">
      </router-view>
    </div>
  </div>
</template>

<script>
import { isAuthenticated, getProfile, authNotifier } from './auth/authState';

export default {
  name: 'app',
  data () {
    authNotifier.on('change', authResult => {
      this.authenticated = authResult.authenticated;
      this.profile = authResult.profile;
    });
    let profile = getProfile();
    let authenticated = isAuthenticated();
    return {
      authenticated,
      profile
    };
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.btn-margin {
  margin-top: 7px
}
.profilepic {
  height: 49px;
}
</style>
