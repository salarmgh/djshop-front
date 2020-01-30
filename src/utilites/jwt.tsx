import axios from "axios";
import { Login, Logout } from "../actions/LoginActions";
import { useDispatch } from "react-redux";

const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export const getToken = (username, password) => {
  return dispatch => {
    axios.post(`${backendBaseUrl}/token/obtain/`, { username: username, password: password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        let jwtDecode = require('jwt-decode');
        localStorage.setItem('auth-token', res.data.access);
        localStorage.setItem('auth-refresh', res.data.refresh);
        const userData = jwtDecode(res.data.access)
        localStorage.setItem('user-info', JSON.stringify({ email: userData.email, firstName: userData.first_name, lastName: userData.last_name, number: userData.number, userId: userData.user_id }));
        dispatch(Login());
      })
      .catch(error => {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('auth-refresh');
        localStorage.removeItem('user-info');
        dispatch(Logout());
      });
  }
}

export function refreshToken() {
  return dispatch => {
    axios.post(`${backendBaseUrl}/token/refresh/`, { refresh: localStorage.getItem('auth-refresh') }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        localStorage.setItem('auth-token', resp.data.access);
        dispatch(Login());
      })
      .catch(() => {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('auth-refresh');
        localStorage.removeItem('user-info');
        dispatch(Logout());
      });
  };
}

export const isTokenValid = () => {
  return dispatch => {
    axios.post(`${backendBaseUrl}/token/verify/`, { token: localStorage.getItem('auth-token') }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        dispatch(Login());
      })
      .catch(() => {
        dispatch(refreshToken());
      });
  };
}
