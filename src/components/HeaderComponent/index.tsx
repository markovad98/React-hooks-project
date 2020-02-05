import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../App/mediafiles/logo192.png';
import './index.sass';

const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Sign in', path: '/login' },
    { title: 'Sign up', path: '/register' },
];

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="react-logo" className="logo__img" />
            </div>
            <nav className="nav">
                <ul className="nav__list">
                    {
                        menuItems.map(({title, path}, idx) => (
                            <li key={idx}>
                                <NavLink activeClassName='nav__list-item_active' className="nav__list-item" to={path} exact>{ title }</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;
