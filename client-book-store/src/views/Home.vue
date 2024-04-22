<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Chào mừng bạn đến với Trang Quản lý Sách</h3>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
};
</script>
