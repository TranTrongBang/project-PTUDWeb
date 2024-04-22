import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/nha-xuat-ban',
      name: 'nha xuat ban',
      // lazy-loaded
      component: () => import('./views/publishing_company/PublishingCompanyList.vue')
    },
    {
      path: '/nha-xuat-ban/detail/:id',
      name: 'nha xuat ban - Xem chi tiết',
      // lazy-loaded
      component: () => import('./views/publishing_company/PublishingCompanyDetail.vue')
    },
    {
      path: '/nha-xuat-ban/create',
      name: 'nha xuat ban - Tạo mới',
      // lazy-loaded
      component: () => import('./views/publishing_company/PublishingCompanyCreate.vue')
    },
    {
      path: '/nha-xuat-ban/edit/:id',
      name: 'nha xuat ban - Sửa',
      // lazy-loaded
      component: () => import('./views/publishing_company/PublishingCompanyEdit.vue')
    },
    {
      path: '/sach',
      name: 'Sách',
      // lazy-loaded
      component: () => import('./views/book/BookList.vue')
    },
    {
      path: '/sach/create',
      name: 'Sách - Tạo mới',
      // lazy-loaded
      component: () => import('./views/book/BookCreate.vue')
    },
    {
      path: '/sach/detail/:id',
      name: 'Sách - Xem chi tiết',
      // lazy-loaded
      component: () => import('./views/book/BookDetail.vue')
    },
    {
      path: '/sach/edit/:id',
      name: 'Sách - Chỉnh sửa',
      // lazy-loaded
      component: () => import('./views/book/BookEdit.vue')
    },
    {
      path: '/sach-user',
      name: 'Sách của user',
      // lazy-loaded
      component: () => import('./views/book_user/BookList.vue')
    },
    {
      path: '/borrow-book-user',
      name: 'Sách của user',
      // lazy-loaded
      component: () => import('./views/borrow_book_user/BorrowBookList.vue')
    },
    {
      path: '/borrow-book',
      name: 'Sách mượn - Quản lý admin',
      // lazy-loaded
      component: () => import('./views/borrow_book/BorrowBookList.vue')
    },
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
