<template>
  <div class="spinner">
    <img src="../assets/loading.svg" alt="loading"/>
  </div>
</template>

<script>
  import { handleAuthentication } from '../auth/authService';

  export default {
    name: 'callback',
    mounted: function () {
      // TODO: how to tell mounted() this is async?
      handleAuthentication(err => {
        if (err) {
          this.$router.replace('home');
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
          return;
        }
        this.$router.replace('home');
      });
    }
  }
</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
