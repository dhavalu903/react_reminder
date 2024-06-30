import './header.css'
import { Link } from 'react-router-dom';

function Header(){

    return (
        <>
            <div className='header_nav_class' style={{ backgroundColor: '#0000FF' }}>
                <ul>
                    <li><Link to="\">Home</Link></li>
                    <li>Register</li>
                    <li>Login</li>
                    <li>Customer List</li>
                </ul>
            </div>
        </>
    )
}

export default Header;