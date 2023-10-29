import { SERVER_URL } from "./constants";

class MainApi {
  constructor({ serverUrl, headers }) {
    this.serverUrl = serverUrl;
    this.headers = headers;
  }

  _checkRequestResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((data) => {
      return Promise.reject(data.message || "Ошибка");
    });
  };

  getServerUserInfo(token) {
    return fetch(`${this.serverUrl}/users/me`, {
      method: "GET",
      headers: { ...this.headers, authorization: `Bearer ${token}` },
    }).then(this._checkRequestResponse);
  }

  updateServerUserInfo(data, token) {
    return fetch(`${this.serverUrl}/users/me`, {
      method: "PATCH",
      headers: { ...this.headers, authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkRequestResponse);
  }

  getMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this.serverUrl}/movies`, {
      method: "GET",
      headers: { ...this.headers, authorization: `Bearer ${token}` },
    }).then(this._checkRequestResponse);
  }

  saveMovie(movieData) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this.serverUrl}/movies`, {
      method: "POST",
      headers: { ...this.headers, authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...movieData }),
    }).then(this._checkRequestResponse);
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this.serverUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: { ...this.headers, authorization: `Bearer ${token}` },
    }).then(this._checkRequestResponse);
  }
}

const mainApi = new MainApi({
  serverUrl: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
