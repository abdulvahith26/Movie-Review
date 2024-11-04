// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className=" bg-blue-900 border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 w-64">
      <Link to={`/movie/${movie.imdbID}`} className="block text-center ">
        <img src={movie.Poster} alt={movie.Title} className="w-64 h-56 object-cover" />
        <h3 className=" mt-2 text-xm font-semibold text-gray-200">{movie.Title}</h3>
        <p className="text-sm text-gray-300">{movie.Year}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
