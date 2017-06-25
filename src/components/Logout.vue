<template>
</template>

<script>
  import { logout } from '../auth/authState';

  export default {
    name: 'logout',
    mounted: function () {
      logout();
      this.$router.push('/');
    }
  }
</script>
