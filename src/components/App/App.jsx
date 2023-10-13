import React, { useState, useEffect, useCallback } from 'react';
import Main from '../Main/Main'
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies'
import './App.css';
import { Routes, Route, useLocation, useNavigate  } from 'react-router-dom';
import moviesApi from '../../utils/MovieApi';
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { LoginContext } from '../../context/LoginContext';

function App() {
  const { pathname } = useLocation();
  const location = useLocation();
  const [allFilms, setAllFilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);
  const [searchItemSaved, setSearchItemSaved] = useState('');
  const [isCheckedSaved, setIsCheckedSaved] = useState(false);
  const [showFilmsSaved, setShowFilmsSaved] = useState(savedFilms);
  const [showFilms, setShowFilms] = useState([]);
  const [searchItem, setSearchItem] = useState(localStorage.getItem("request") || "");
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem("checkbox")));
  const [isLogIn, setLogIn] = useState(false); 
  const [user, setUser] = useState({}); 

  const navigate = useNavigate(); 

  const handleChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleChangeCheckboxSaved = () => {
    setIsCheckedSaved(!isCheckedSaved);
  };

  const checkToken = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .getContent(token).then(() => {
          setLogIn(true);
        })
        .catch((err) => {if(err.includes(401)) {
            setLogIn(false);
            localStorage.clear();
            console.log(err);
          }
        });
    };
  }, [])

  useEffect(() => {
    checkToken();
  }, [checkToken, navigate, pathname]);

  useEffect(() => {
    if (isLogIn) {
      mainApi.getUserInfo()
      .then(data => {
        setUser(data);
      })
  }
  }, [isLogIn]);

  const handleLikeMovie = (movie) => {
    mainApi.createMovies(movie)
      .then((data) => {
        const newSavedMovies = [data, ...savedFilms || []];
        setSavedFilms(newSavedMovies);
        localStorage.setItem("saved", JSON.stringify(newSavedMovies));
        updateMovies();
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const handleDeleteMovie = (id) => {
    mainApi.deleteMovies(id)
      .then((data) => {
        const newSavedMovies = savedFilms ? savedFilms.filter(el => el.movieId !== data.movieId) : [];
        setSavedFilms(newSavedMovies);
        localStorage.setItem("saved", JSON.stringify(newSavedMovies));
        updateMovies();
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const filterMovies = (moviesList, searchItem, isChecked) => {
    if (!searchItem && location.pathname === '/movies') {
      return
    }
    return moviesList && moviesList.filter((movie) => {
      const searchRU = movie.nameRU.toLowerCase();
      const searchEN = movie.nameEN.toLowerCase();
      const isShortMovie = isChecked ? movie.duration < 40 : true;
      return (searchRU.includes(searchItem.toLowerCase()) || searchEN.includes(searchItem.toLowerCase())) && isShortMovie
    })
  };

  const handleSubmitSearch = () => {
    const filteredMovies = filterMovies(JSON.parse(localStorage.getItem("all-movies")), searchItem, isChecked);
    setShowFilms(filteredMovies);
  };

  const handleSubmitSearchSaved = () => {
    const filteredMovies = filterMovies(JSON.parse(localStorage.getItem("saved")), searchItemSaved, isCheckedSaved);
    setShowFilmsSaved(filteredMovies);
  };

  const handleChangeInput = evt => {
    setSearchItem(evt.target.value);
  };

  const handleChangeInputSaved = evt => {
    setSearchItemSaved(evt.target.value);
  };

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      }).then(() => {
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      })
  };

  function handleLogin(email, password) {
    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          checkToken();
          navigate('/movies', { replace: true })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  function handleLogout() {
    setLogIn(false);
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("all-movies");
    localStorage.removeItem("saved");
    navigate("/", { replace: true });
  };

  const handleUpdateUser = (profile) => {
    mainApi.editUserProfile(profile)
      .then((data)=> {
        setUser(data);
      })
      .catch(err => console.log(err))
  };

  const updateMovies = () => {
    const moviesData = JSON.parse(localStorage.getItem("all-movies"));
    const savedMoviesData = JSON.parse(localStorage.getItem("saved"));
    if (moviesData) {
      const ownerMovies = moviesData.map((movie) => {
        savedMoviesData.map(el => el.movieId).includes(movie.id) ?
        movie.saved = true : movie.saved = false;
        return movie
      });
      localStorage.setItem("all-movies", JSON.stringify(ownerMovies));
    }
  };

  useEffect(() => {
    moviesApi.getMovies()
      .then((data) => {
        const updateData = data.map((el) => {
          const newCard = {...el};
          newCard.image = `https://api.nomoreparties.co${el.image.url}`;
          newCard.thumbnail = `https://api.nomoreparties.co${el.image.formats.thumbnail.url}`;
          newCard.movieId = el.id;
          delete newCard.id;
          delete newCard.created_at;
          delete newCard.updated_at;
          delete newCard.saved;
          return newCard
        })
        setAllFilms(updateData);
        localStorage.setItem('all-movies', JSON.stringify(updateData));
      })
  }, [])

  useEffect(() => {
    if (isLogIn) {
      mainApi.getMovies()
      .then((data) => {
        const myFilms = data.filter((el) => {
          return el.owner === user._id
        });
        setSavedFilms(myFilms);
        setShowFilmsSaved(myFilms);
        localStorage.setItem('saved', JSON.stringify(myFilms))
      })
    }
  }, [user._id, isLogIn])

  useEffect(() => {
    if (searchItem) {
      localStorage.setItem("request", searchItem);
    }
    localStorage.setItem("checkbox", JSON.stringify(isChecked));
  }, [searchItem, isChecked])

  useEffect(() => {
    handleSubmitSearch();
  }, [isChecked])

  useEffect(() => {
    handleSubmitSearchSaved();
  }, [isCheckedSaved, savedFilms, navigate])

  return (
    <LoginContext.Provider value={ {isLogIn, handleLogout} }>
      <CurrentUserContext.Provider value={user}>
        <div className="page">
          {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile" ?
            <Header /> : ""}
          <main className="main">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={
                <Movies
                  allFilms={allFilms}
                  handleSubmitSearch={handleSubmitSearch}
                  searchTerm={searchItem}
                  handleChange={handleChangeCheckbox}
                  handleChangeInput={handleChangeInput}
                  showFilms={showFilms}
                  handleLikeMovie={handleLikeMovie}
                  isChecked={isChecked}
                />
              } />
              <Route path="/saved-movies" element={
                <SavedMovies
                  showFilms={showFilmsSaved}
                  handleSubmitSearch={handleSubmitSearchSaved}
                  handleDeleteMovie={handleDeleteMovie}
                  searchTerm={searchItemSaved}
                  isChecked={isCheckedSaved}
                  handleChange={handleChangeCheckboxSaved}
                  handleChangeInput={handleChangeInputSaved}
                />
              }/>
              <Route path="/profile" element={<Profile onLogout={handleLogout} handleUpdateUser={handleUpdateUser}/>} />
              <Route path="/signup" element={<Register handleRegister={handleRegister}/>} />
              <Route path="/signin" element={<Login handleLogin={handleLogin}/>} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" ? <Footer /> : ""}
        </div>
      </CurrentUserContext.Provider>
    </LoginContext.Provider>
  );
};


export default App;
