import React from 'react';
import  classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header__img} src="https://dynamic.brandcrowd.com/asset/logo/d821405e-3174-4776-b684-363a0e0e4974/logo?v=4"></img>
        </header>
    )
}

export default Header;