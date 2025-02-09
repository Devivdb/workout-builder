import './SignUp.css';
import useBackground from "../../hooks/useBackground.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    const navigate = useNavigate();
    useBackground("log-in-background");

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        info: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("https://api.datavortex.nl/workoutflow/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "*/*",
                    "X-Api-Key": `${import.meta.env.VITE_API_KEY_NOVI_BACKEND}`
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    info: formData.info,
                    authorities: [{ authority: "USER" }]
                })
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData || "Signup failed");
            }

            const data = await response.json();
            alert("Account created successfully!");
            navigate("/log-in");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <button className="back-button" onClick={handleBackClick}>
                    <ArrowBackIcon />
                </button>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">User name:</label>
                    <input type="text" id="username" name="username" required value={formData.username} onChange={handleChange} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange} />
                    <label htmlFor="repeatPassword">Repeat password:</label>
                    <input type="password" id="repeatPassword" name="repeatPassword" required value={formData.repeatPassword} onChange={handleChange} />
                    <label htmlFor="info">Info:</label>
                    <input type="text" id="info" name="info" value={formData.info} onChange={handleChange} />
                    <hr className="divider" />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="signup-button">Sign up</button>
                    <div className="links">
                        <NavLink to="/log-in">Log in</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
