import { useEffect, useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

function Header(){

    // const token = localStorage.getItem('token')
    const [token,setToken] = useState(localStorage.getItem('token'));
    // console.log('header token',token)

    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem('token'));
        };

        window.addEventListener('storage', handleStorageChange);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <>
            <div className='header_nav_class' style={{ backgroundColor: '#0000FF' }}>
                <ul>
                    {!token && <li>Register</li> }
                    {!token && <li>Login</li>}
                    {token && <li>Customer List</li> }
                    {token && <li><Link to="/logout">Logout</Link></li> }
                </ul>
            </div>
        </>
    )
}

export default Header;