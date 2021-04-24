import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/img/logo.png';
import * as classes from './Header.module.css';

function Header(props){
    return (<React.Fragment>
                <div className={classes.header}>                    
                        <Link to="/">
                            <img src={logo} height="60px" width="60px" />
                        </Link>
                        
                        <ul className={classes.links}>
                            <li>
                                <Link to="/products" >Products</Link>
                            </li>
                            <li>
                                <Link to="/cart">Cart</Link>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                </div>
            </React.Fragment>
            )
}

export default Header;