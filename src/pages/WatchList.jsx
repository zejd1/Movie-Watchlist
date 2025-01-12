import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../Components/MovieCard";

function WatchList(){
    const { favorites } = useMovieContext();
    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Watchlist</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Movies On Your Watch List</h2>
            <p>Start adding to your watch list and they will appear here.</p>
        </div>
    );
}

export default WatchList;
