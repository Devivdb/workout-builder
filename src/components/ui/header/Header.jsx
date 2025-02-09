import './Header.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/log-in");
    };

    return (
        <header className="nav-bar">
            <nav className="menu">
                <p className="website-name">
                    <NavLink to="/">Workout<span>Flow</span></NavLink>
                </p>
                <ul className="main-menu">
                    <li>
                        <NavLink to="/features">Features</NavLink>
                    </li>
                    <li>
                        <NavLink to="/highlights">Highlights</NavLink>
                    </li>
                    <li>
                        <NavLink to="/testimonials">Testimonials</NavLink>
                    </li>
                        <>
                            <li>
                                <NavLink to="/workout-builder">Workout builder</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search">Exercise finder</NavLink>
                            </li>
                        </>
                </ul>
                <ul className="sign-in-log-in">
                    {isAuthenticated ? (
                        <li>
                            <button className="logout-button" onClick={handleLogout}>Logout</button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/log-in">Log in</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sign-up">Sign up</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
