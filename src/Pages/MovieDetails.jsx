// src/pages/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../api';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
    <div className="flex items-center space-x-4">
      {/* Colorful Loading Spinner */}
      <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 border-b-green-500 border-l-yellow-500 border-r-pink-500 rounded-full animate-spin"></div>
      
      {/* Loading Text */}
      <div className="text-white text-4xl font-bold animate-pulse">
        Loading...
      </div>
    </div>
  </div>;
  }

  return (
    <>
    <Navbar/>
    
    <div className="p-10 bg-gradient-to-tr from-black via-slate-900 to-slate-800 h-screen " >
      <h2 className="text-4xl font-bold text-center mb-4 text-slate-400">{movie.Title}</h2>
      <div className=" items-center md:items-start">
        <img src={movie.Poster} alt={movie.Title} className="w-64 h-64 mb-4 md:mr-6 justify-self-center " />
        <div className="text-lg text-slate-400"><pre>
          <p><span className="font-semibold ">Run Time:</span> {movie.Runtime}</p>
          <p><span className="font-semibold ">Director:</span> {movie.Director}</p>
          <p><span className="font-semibold ">Writer  :</span> {movie.Writer}</p>
          <p><span className="font-semibold ">Year    :</span> {movie.Year}</p>
          <p><span className="font-semibold">Genre   :</span> {movie.Genre}</p>
          <p><span className="font-semibold">Cast    :</span> {movie.Actors}</p>
          <p className="relative inline-block">
  <span className="font-semibold">Rating  :</span> 
  <span className="relative z-10">{movie.imdbRating}</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="gold"
    width="24px"
    height="24px"
    className="absolute left-32 top-0 "
  >
    <path d="M12 .587l3.668 7.431 8.232 1.196-5.956 5.786 1.404 8.187L12 18.896l-7.348 3.866 1.404-8.187-5.956-5.786 8.232-1.196L12 .587z" />
  </svg>
</p></pre>
<p><span className="font-semibold bg-black">Plot    :</span> {movie.Plot}</p>

        </div>
      </div>
    </div>
    </>
  );
}

export default MovieDetails;
