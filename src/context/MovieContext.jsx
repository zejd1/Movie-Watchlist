import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);


export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((f) => [...f, movie]);
  };

  const removeToFavorites = (movieId) => {
    setFavorites((f) => f.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeToFavorites,
    isFavorite,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
