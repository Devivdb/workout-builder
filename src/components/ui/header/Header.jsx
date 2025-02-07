import './Header.css'
import {Link} from "react-router-dom";

function Header(){
    return (
        <>
            <p>WorkoutFlow</p>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/features">Features</Link>
                        </li>
                        <li>
                            <Link to="/testimonials">Testimonials</Link>
                        </li>
                        <li>
                            <Link to="/highlights">Highlights</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;