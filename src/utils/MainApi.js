class MainApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  };

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    };

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  register(name, email, password) {
    return fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password}),
    })
    .then(this._checkingResponse);
  };

  login(email, password) {
    return fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
    })
    .then(this._checkingResponse)
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);
        return data;
      }
      return Promise.reject(`Ошибка: ${data.status}`);
    });
  };

  getAllInfo() {
    return Promise.all([this.getUserInfo(), this.getMovies()]);
  };

  getUserInfo() {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkingResponse);
  };

  getContent(token) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkingResponse);
  };

  editUserProfile(data) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    })
    .then(this._checkingResponse);
  };

  getMovies() {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}movies`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkingResponse);
  };

  createMovies(film) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}movies`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(film),
    }).then(this._checkingResponse);
  };

  deleteMovies(_id) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}movies/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(this._checkingResponse);
  };
}

const mainApi = new MainApi({
  baseUrl: 'http://158.160.64.142:3000/',
});

export default mainApi;
