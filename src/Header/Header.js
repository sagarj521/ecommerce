import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/img/logo.png';
import Navigation from '../Navigation/Navigation';
import * as classes from './Header.module.css';

function Header(props){
    
    return (<React.Fragment>
            <div className={classes.header}>
                        <Link to="/">
                            <img src={logo} height="60px" width="60px" />
                        </Link>
                        <Navigation />                       
                </div> 
            </React.Fragment>
            )
}

export default Header;