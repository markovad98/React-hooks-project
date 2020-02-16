import React, { useState, useEffect, useContext } from 'react';

import BackendErrorMessages from '../../components/BackendErrorMessages';

import { Link, useLocation, Redirect } from 'react-router-dom';
import { APP_PATHS } from '../../constants/routes';
import { API_PATHS } from '../../constants/api';

import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';

import { CurrentUserContext, IAuthUserInfo } from '../../contexts/currentUser';

import './index.sass';

const AuthPage = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isRedirect, setIsRedirect] = useState<boolean>(false);
    const [, setToken] = useLocalStorage('token');
    const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);

    const { pathname } = useLocation();
    const isLogin = pathname === APP_PATHS.LOGIN;
    const user = isLogin ? { email, password } : { email, password, username };
    const pageTitle =  isLogin ? 'Sign in' : 'Sign up';
    const linkText = isLogin ? 'Already have an account?' : 'Need an account?';
    const linkPath = isLogin ? APP_PATHS.REGISTER : APP_PATHS.LOGIN;

    const [{ response, error }, doFetch] = useFetch(
        isLogin
            ? API_PATHS.DO_LOGIN
            : API_PATHS.DO_REGISTER
    );

    useEffect(() => {
        if (!response) {
            return;
        }
        setToken(response.user.token);
        setIsRedirect(true);
        setCurrentUserState((state: IAuthUserInfo) => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: response.user,
        }))
    }, [response, setToken, setCurrentUserState]);

    const handleRegisterOfAuth = () => {
        doFetch({
            method: 'post',
            data: {
                user
            },
        })
    }

    if (isRedirect) {
        return <Redirect to={APP_PATHS.HOME} />
    }

    console.warn('currentUserState: ', currentUserState);

    return (
        <section className="auth-section">
            <h1>{ pageTitle }</h1>
            <form onSubmit={e => e.preventDefault()} action="" className="auth-section-form">
                { error && <BackendErrorMessages backendErrors={error.errors} /> }
                <Link to={linkPath}>{ linkText }</Link>
                {
                    !isLogin &&
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder='Username'
                        type="text"
                        className="auth-section-form__input"
                    />
                }
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
                    type="password"
                    className="auth-section-form__input" />
            </form>
            <button onClick={handleRegisterOfAuth} className='auth-section-form__button'>
               { pageTitle }
            </button>
        </section>
    )
}

export default AuthPage;
