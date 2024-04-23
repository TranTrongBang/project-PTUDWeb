<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>Quản lý mượn sách</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/sach" class="nav-link">Quản lý sách</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/nha-xuat-ban" class="nav-link">Quản lý Nhà xuất bản</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/borrow-book" class="nav-link">Quản lý Sách mượn</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/sach-user" class="nav-link">Sách</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/borrow-book-user" class="nav-link">Sách đã mượn</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role.includes('nhanvien');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role.includes('docgia');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
