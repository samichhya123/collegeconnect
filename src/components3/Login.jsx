import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });

            // Assuming response.data contains user data and token
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            alert('Login successful');
            // Optionally, redirect or update the UI here
        } catch (err) {
            // Handle error response
            const errorMsg = err.response ? err.response.data.msg : 'Login failed. Please try again.';
            setError(errorMsg);
            console.error(errorMsg);
        }
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn1">Login</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="signUp-link">
                    <p>Don't have an account? <a href="/signup">Sign up here</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
