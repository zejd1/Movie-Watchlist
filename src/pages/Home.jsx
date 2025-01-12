import "../css/Home.css"
import MovieCard from "../Components/MovieCard";
import {getPopularMovies, seachMovies} from "../services/api";
import React, {useState, useEffect} from 'react'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err){
                console.log(err);
                setError("Failed to load movies... "); 
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();

        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await seachMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }
        catch(err){
            console.log(err);
            setError("Failed to search movies...");
        }
        finally{
            setLoading(false);
        }

    };

    return (
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input type="text" placeholder="Search For Movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                    <button type="submit" className="search-button">Search</button>
                </form>

                {error && (<div className="error-message">{error}</div>)}

                <div className="movies-grid">
                    {movies.map(movie => 
                    movie.title.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase()) && (<MovieCard movie={movie} key={movie.id}/>))}
                </div>
            </div>
        </>
    )
}

export default Home