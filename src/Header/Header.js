import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/img/logo.png';
import Navigation from '../Navigation/Navigation';
import * as classes from './Header.module.css';

function Header(props){
    
    return (<React.Fragment>
            <div className={classes.header}>
                <div className={classes.brand_name}>
                    <Link to="/">
                        Sweet Cakes
                    </Link>
                </div>
                    <Navigation />                       
                </div> 
            </React.Fragment>
            )
}

export default Header;