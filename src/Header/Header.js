import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/img/logo.png';
import * as classes from './Header.module.css';

function Header(props){
      
    const isLoggedIn = false;
    
    return (<React.Fragment>
            {
            isLoggedIn?<div className={classes.header}>
                        <Link to="/">
                            <img src={logo} height="60px" width="60px" />
                        </Link>
                        
                        {/* <Redirect path="/login" component={Login} /> */}

                        <ul className={classes.links}>
                            <li>
                                <NavLink to="/products" >Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart">Cart</NavLink>
                            </li>                            
                            <li>
                                <a href="">My Acount</a>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <a href="" onClick={props.logOut} test="sagar" test2="Sagar2">Logout</a>
                            </li>

                        </ul>
                </div> : null}                
            </React.Fragment>
            )
}

export default Header;