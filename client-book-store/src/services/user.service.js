import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/users';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  searchDocGia() {
    return axios
      .post(API_URL + '/search', {}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new UserService();
