import './LogIn.css';
import useBackground from "../../hooks/useBackground.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();
    useBackground("log-in-background");

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_NOVI_BACKEND_HOST}/users/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "acceot": "*/*",
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsInVzZXJJZCI6ODA0LCJhcHBsaWNhdGlvbk5hbWUiOiJ3b3Jrb3V0ZmxvdyIsInN1YiI6IkRldmkiLCJpYXQiOjE3MzkxMzU0NjIsImV4cCI6MTczOTk5OTQ2Mn0.6gRSevTWtfIEKRknn1SZ-XNn_gPQs2461oYIw_cQxCs`
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Login failed");

            localStorage.setItem('token', data.token);
            navigate('/workout-builder'); // Redirect to a protected page after login
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <button className="back-button" onClick={handleBackClick}>
                        <ArrowBackIcon />
                    </button>
                    <form className="login-form" onSubmit={handleLogin}>
                        <label htmlFor="username">User name:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <p className="error-message">{error}</p>}
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
