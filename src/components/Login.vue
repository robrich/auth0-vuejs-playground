<template>
</template>

<script>
  import { login } from '../auth/authService';
  export default {
    name: 'login',
    mounted: function () {
      login();
    }
  }
</script>
