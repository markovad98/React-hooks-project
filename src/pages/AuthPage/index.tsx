import React from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { APP_PATHES } from '../../App'
import './index.sass';

const AuthPage = () => {
    const { pathname } = useLocation()

    return (
        <section className="auth-section">
            <form action="" className="auth-section-form">
                { pathname }
                <input
                    placeholder='email'
                    type="text"
                    className="auth-section-form__input"
                />
                <input
                    placeholder='password'
                    type="text"
                    className="auth-section-form__input" />
            </form>
        </section>
    )
}

export default AuthPage;
