import './Footer.css'
import {NavLink} from "react-router-dom";

function Footer(){
    return (
        <>
            <footer className="footer">
                <div className="footer-text">
                    <p>DESIGNED BY</p>
                    <p>Devi van den Broeke</p>
                    <p>© 2024 – 2025 Privacy Policy Privacy Preferences</p>
                </div>
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
                </nav>
            </footer>
        </>
    );
};

export default Footer;