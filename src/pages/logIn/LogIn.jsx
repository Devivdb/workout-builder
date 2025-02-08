import './LogIn.css';
import useBackground from "../../hooks/useBackground.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink, useNavigate } from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();

    useBackground("log-in-background");

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <button className="back-button" onClick={handleBackClick}>
                        <ArrowBackIcon />
                    </button>
                    <form className="login-form">
                        <label htmlFor="username">User name:</label>
                        <input type="text" id="username" name="username" required />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                        <hr className="divider" />
                        <button type="submit" className="login-button">Log in</button>
                        <div className="links">
                            <NavLink to="/sign-up">Create account</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LogIn;
