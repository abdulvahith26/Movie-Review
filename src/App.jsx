// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPages from './Pages/Searchpage';
import MovieDetails from './Pages/MovieDetails';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Searchpages/>} />
        <Route  element={<Navbar/>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
