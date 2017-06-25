<template>
  <div>
    <h4>This page is secure</h4>
    <p>
        Hello {{profile.given_name}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'admin',
    props: ['profile']
  }
</script>
