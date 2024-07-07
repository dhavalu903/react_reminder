import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './login.css';

function Login() {

    const [mobile,setMobile] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/login",{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({mobile,password})
        })

        const data = await response.json()
        // console.log(response.status)
        // console.log(data.data)

        if(response.status=="200"){
            localStorage.setItem("token",data.data.token)
            navigate("/dashboard")
            window.dispatchEvent(new Event('storage'));
        }
        else{
            setError(data.error)
            alert(data.error)
        }
    }

    return (
        <div className="container">
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
                            onChange={(e)=>setMobile(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-gradient w-100">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;