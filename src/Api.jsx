// src/api.js
import axios from 'axios';

// Function to fetch movies based on a search query, with pagination and type filtering
export const searchMovies = async (query, page = 1, type = '') => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&page=${page}&type=${type}&apiKey=910079eb`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Function to fetch details for a specific movie by its ID
export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apiKey=910079eb`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
