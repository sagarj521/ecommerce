import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../Context/auth-context';
import * as classes from './Navigation.module.css';

const Navigation = (props) => {
    const auth = useContext(AuthContext);

    return (
            <ul className={classes.links}>
                <li>
                    <NavLink to="/products" >Products</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>    
                { auth.isLoggedIn && (
                        <li>
                        <NavLink to="/my-account">My Acount</NavLink>
                    </li>
                )}
                { !auth.isLoggedIn && (
                    <li>
                    <NavLink to="/login">Login</NavLink>
                    </li>
                )}                
                { auth.isLoggedIn && (
                    <li>
                        <NavLink to="/orders">Orders</NavLink>
                    </li>
                )}
                { auth.isLoggedIn && (
                    <li>
                        <NavLink to="/wishlist">Wishlist</NavLink>
                    </li>
                )}                        
                { auth.isLoggedIn && (
                    <li>
                        <a href="#" onClick={auth.handleLogout}>Logout</a>
                    </li>
                )}                        
            </ul>
     );
}
 
export default Navigation;