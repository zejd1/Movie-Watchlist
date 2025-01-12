import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie Watchlist</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/WatchList" className="nav-link">Watchlist</Link>
            </div>
        </nav>
    );
}

export default NavBar