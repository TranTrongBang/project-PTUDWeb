<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>Hello To Profile</strong>
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{ currentUser.token }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>