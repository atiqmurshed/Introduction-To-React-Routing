
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           <h2>Navbar</h2>
           <nav>
            <span>My website</span>
            <Link to="/">Home</Link>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact Us</Link>

           </nav>
         
        </div>
    );
};

export default Header;