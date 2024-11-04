// src/pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { searchMovies } from '../api';
import Pagination from '../components/Pagination';
import Navbar from '../Components/Navbar';
import MovieCard from '../Components/MovieCard';

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller"];
const ratings = ["G", "PG", "PG-13", "R", "NC-17"];
const languages = ["Tamil", "Malayalam", "Telugu", "Kannadam", "hindi", "English", "Urudu", "Chinese"];


function SearchPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [type, setType] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');


  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await searchMovies(query, page, type);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults, 10));
        setError(null);
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error);
      }
    } catch (err) {
      setError("An error occurred while fetching movies.");
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query, page, type]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-black via-slate-900 to-slate-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto">
        {/* Centered Search Bar */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-white text-3xl font-bold mb-4">Find Your Favorite Movies</h1>
          <div className="flex flex-col md:flex-row items-center justify-center mb-4">
            <input
              type="text"
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border rounded-lg p-3 w-96 m-5 "
            />
           
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white w-40 p-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Search
            </button>
          </div>

          {/* Additional Filter Options */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="border rounded-lg p-3 w-full md:w-32 mb-4 md:mr-4 text-sm"
            >
              <option value="">Select Genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="border rounded-lg p-3 w-60 md:w-32 mb-4 md:mr-4 text-sm"
            >
              <option value="">Select Rating</option>
              {ratings.map((rating) => (
                <option key={rating} value={rating}>{rating}</option>
              ))}
            </select>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border rounded-lg p-3 w-60 md:w-1/4 mb-4 md:mr-4 text-xs"
            >
              <option value="">Language</option>
              {languages.map((language) => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Display search results or error message */}
        {error ? (
          <p className="text-center text-red-500 mb-4">{error}</p>
        ) : (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))
            ) : (
              <p className="text-center text-gray-200 col-span-full">No movies found.</p>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalResults > 10 && (
          <Pagination
            currentPage={page}
            totalResults={totalResults}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default SearchPage;
