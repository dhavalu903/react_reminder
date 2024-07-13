import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './login.css';
import Loader from './Loader';
import { API_URL } from './constant';

function Login() {

    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {

            const response = await fetch(`${API_URL}login`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ mobile, password })
            })

            const data = await response.json()
            // console.log(response.status)
            // console.log(data.data)

            if (response.status == "200") {
                localStorage.setItem("token", data.data.token)
                navigate("/dashboard")
                window.dispatchEvent(new Event('storage'));
                
            }
            else {
                setError(data.error)
                setLoading(false);
            }
        }
        catch(error)
        {
            console.log(error)
            setError(error)
            setLoading(false);
        }
    }

    return (
        
        <div className="container">
            {loading && <Loader />}
            <div className="login_form bg-light shadow rounded p-4 mx-auto mt-5">
                <h2 className="text-center mb-4 text-dark">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input
                            type="text"
                            id="mobile"
                            className="form-control"
                            placeholder="Enter your mobile"
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-gradient w-100">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;