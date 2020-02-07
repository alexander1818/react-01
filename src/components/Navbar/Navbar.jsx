import React from 'react';
import  classes from './Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
        <div className={classes.nav_wrap}><a className={classes.nav__item} href="#s">Profile</a></div>
        <div className={classes.nav_wrap}><a className={classes.nav__item} href="#s">Messages</a></div>
        <div className={classes.nav_wrap}><a className={classes.nav__item} href="#s">News</a></div>
        <div className={classes.nav_wrap}><a className={classes.nav__item} href="#s">Music</a></div>
        <div className={classes.nav_wrap}><a className={classes.nav__item} href="#s">Settings</a></div>
 
      </nav>
    )
}

export default NavBar;