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
import Navigation from '../Navigation/Navigation';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'; 

function App() {
  const location= useLocation();
  const routeWithHeder = ['/', '/movies', '/saved-movies', '/profile']
  const routeWithFooter = ['/', '/movies', '/saved-movies']
  return (
    <div className="page">
      {routeWithHeder.includes(location.pathname) ? <Header /> : ""}
      <main className='main'>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element ={<Movies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {routeWithFooter.includes(location.pathname) ? <Footer /> : ""}
      <Navigation />
    </div>
  );
}

export default App;
