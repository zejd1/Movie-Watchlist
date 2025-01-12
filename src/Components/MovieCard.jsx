import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext";

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeToFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onLikeClick(e){
        e.preventDefault();
        if(favorite) removeToFavorites(movie.id)
        else addToFavorites(movie)
    }   
    return(
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onLikeClick}>♥</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Release: {movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
    );
}

export default MovieCard