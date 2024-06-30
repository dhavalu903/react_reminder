import './login.css';

function Login() {
    return (
        <div className="container">
            <div className="login_form bg-light shadow rounded p-4 mx-auto mt-5">
                <h2 className="text-center mb-4 text-dark">Login</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit" className="btn btn-gradient w-100">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;