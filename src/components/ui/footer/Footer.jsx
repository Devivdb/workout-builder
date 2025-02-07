import './Footer.css'
import {Link} from "react-router-dom";

function Footer(){
    return (
        <>
            <footer>
                <div className="footer-text">
                    <p>DESIGNED BY</p>
                    <p>Devi van den Broeke</p>
                    <p>© 2024 – 2025 Privacy Policy Privacy Preferences</p>
                </div>
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
            </footer>
        </>
    );
};

export default Footer;