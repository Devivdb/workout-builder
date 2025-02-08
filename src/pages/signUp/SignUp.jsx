import './SignUp.css';
import useBackground from "../../hooks/useBackground.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    useBackground("log-in-background");

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="signup-wrapper">
                <div className="signup-container">
                    <button className="back-button" onClick={handleBackClick}>
                        <ArrowBackIcon />
                    </button>
                    <form className="signup-form">
                        <label htmlFor="username">User name:</label>
                        <input type="text" id="username" name="username" required/>
                        <label htmlFor="firstname">First name:</label>
                        <input type="text" id="firstname" name="firstname" required/>
                        <label htmlFor="lastname">Last name:</label>
                        <input type="text" id="lastname" name="lastname" required/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required/>
                        <label htmlFor="repeatPassword">Repeat password:</label>
                        <input type="password" id="repeatPassword" name="repeatPassword" required/>
                        <hr className="divider"/>
                        <button type="submit" className="signup-button">Sign up</button>
                        <div className="links">
                            <NavLink to="/log-in">Log in</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
