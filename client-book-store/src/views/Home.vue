<template>
  <div class="container-fluid">
    <header class="jumbotron">
      <h3><center>Chào mừng bạn đến với Trang Quản lý Sách</center></h3>
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
