<template>
  <div>
    <h4 v-if="authenticated">
        You are logged in, {{profile.given_name}}
    </h4>
    <h4 v-if="!authenticated">
      You are not logged in! Please <router-link to="/login">Log In</router-link> to continue.
    </h4>
  </div>
</template>

<script>
  export default {
    name: 'home',
    props: ['authenticated', 'profile']
  }
</script>

<style type="text/scss">
  // why is this here? just to show it can be?
  a {
    cursor: pointer;
  }
</style>
