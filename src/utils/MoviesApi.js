import { MOVIES_SERVER_URL } from "./constants";

class MoviesApi {
  constructor({ serverUrl, headers }) {
    this.serverUrl = serverUrl;
    this.headers = headers;
  }

  _checkRequestResponse = (res) => {
    if (res.ok) {
      return Promise.resolve(res.json());
    }
    return Promise.reject("Ошибка");
  };

  getServerMovies() {
    return fetch(`${this.serverUrl}/beatfilm-movies`, {
      method: "GET",
      headers: this.headers,
    })
      .then(this._checkRequestResponse)
      .then((movies) => {
        return movies.map((movie) => {
          const {
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            // thumbnail,
            id,
            nameRU,
            nameEN,
          } = movie;
          return {
            movieId: id,
            country,
            director,
            duration,
            year,
            description,
            trailerLink,
            nameRU,
            nameEN,
            image: this.serverUrl + image.url,
            thumbnail: this.serverUrl + image.url,
          };
        });
      });
  }
}

const moviesApi = new MoviesApi({
  serverUrl: MOVIES_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
