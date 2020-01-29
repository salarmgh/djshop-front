import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export function getToken(username, password) {
  fetch(`${backendUrl}/token/obtain/`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'username': username,
      'password': password
    })
  })
    .then((res) => {
      if (res.status === 401) {
        console.log("401!");
      } else {
        res.json().then((resp) => {
          let jwtDecode = require('jwt-decode');
          localStorage.setItem('user-info', JSON.stringify(jwtDecode(resp.access)));
          localStorage.setItem('auth-token', resp.access);
          localStorage.setItem('auth-refresh', resp.refresh);
        })
      }
    });
}

export function refreshToken(access) {
  fetch(`${backendUrl}/token/refresh/`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'refresh': localStorage.getItem('auth-refresh')
    })
  })
    .then((res) => {
      if (res.status === 401) {
        console.log("Not logged in");
      } else {
        res.json().then((resp) => {
          localStorage.setItem('auth-token', resp.access);
        })
      }
    });
}

export function validateToken(access) {
  fetch(`${backendUrl}/token/verify/`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'token': localStorage.getItem('auth-token')
    })
  })
    .then((res) => {
      if (res.status === 401) {
        refreshToken(access);
      }
    });
}

export function isLoggedIn() {
  const refreshToken = localStorage.getItem('auth-refresh');
  if (refreshToken) {
    validateToken(refreshToken);
  }
}
