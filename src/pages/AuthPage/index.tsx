import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { APP_PATHES } from '../../App';

import useFetch from '../../hooks/useFetch';

import './index.sass';

const AuthPage = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { pathname } = useLocation();
    const isLogin = pathname === APP_PATHES.LOGIN;
    const userData = isLogin ? { email, password } : { email, password, username };

    const [{ isLoading, response, error }, doFetch] = useFetch('users/login');

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }

    const handleAuth = () => {
        doFetch({
            method: 'post',
            data: userData,
        })
    }

    return (
        <section className="auth-section">
            <form onSubmit={handleSubmit} action="" className="auth-section-form">
                <Link to={APP_PATHES.REGISTER}>Need an account?</Link>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Username'
                    type="text"
                    className="auth-section-form__input"
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                    type="text"
                    className="auth-section-form__input"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                    type="text"
                    className="auth-section-form__input" />
            </form>
            <button onClick={handleAuth} className='auth-section-form__button'>
                {
                    pathname === APP_PATHES.LOGIN
                        ? 'sign in'
                        : 'sign up'
                }
            </button>
        </section>
    )
}

export default AuthPage;
