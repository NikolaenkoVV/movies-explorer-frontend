import { SERVER_URL } from "./constants";

const checkRequestResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data)=>{
    return Promise.reject(data.message || 'Ошибка')
  })
};

export const register = ({name, email, password}) => {
  return fetch(`${SERVER_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkRequestResponse);
};

export const authorize = ({email, password}) => {
  return fetch(`${SERVER_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  }).then(checkRequestResponse);
};

export const getToken = (jwt) => {
  return fetch(`${SERVER_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(checkRequestResponse);
};
