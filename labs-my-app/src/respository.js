import axios from "axios";

const BASE_URL = "http://localhost:5000";

export function login(data) {
  return axios
    .post(`${BASE_URL}/api/auth`, { name: data.name, password: data.password })
    .then(response => {
      localStorage.setItem("x-access-token", response.data.token);

      return response.data;
    })
    .catch(err => Promise.reject("Failed!"));
}

export function isAuthenticated() {
  return localStorage.getItem("x-access-token");
}
