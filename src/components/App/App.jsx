import React from 'react';
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
import { Routes, Route, useLocation } from 'react-router-dom'; 

function App() {
  const { pathname } = useLocation();

  return (
    <div className="page">
      {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile" ?
        <Header /> : ""}
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {pathname === "/" || pathname === "/movies" || pathname === "/saved-movies" ? <Footer /> : ""}
    </div>
  );
};


export default App;
