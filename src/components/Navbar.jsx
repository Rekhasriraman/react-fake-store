import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/groceries">Grocery</NavLink>
                </li>
                <li>
                    <NavLink to="/phone">Phone</NavLink>
                </li>
                <li>
                    <NavLink to="/laptop">Laptop</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;