import './Header.css'
import {NavLink} from "react-router-dom";

function Header(){
    return (
        <>

            <header className="nav-bar">
                <p className="website-name">
                    Workout<span>Flow</span>
                </p>
                <nav className="menu">
                    <ul className="main-menu">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/features">Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="/testimonials">Testimonials</NavLink>
                        </li>
                        <li>
                            <NavLink to="/highlights">Highlights</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq">FAQ</NavLink>
                        </li>
                    </ul>
                    <ul className="sign-in-log-in">
                        <li>
                            <NavLink to="/log-in">Log in</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-up">Sign up</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;