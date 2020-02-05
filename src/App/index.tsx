import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import './index.sass'

import HeaderComponent from '../components/HeaderComponent'

import GlobalFeedPage from '../pages/GlobalFeedPage';
import ArticlePage from '../pages/ArticlePage'
import AuthPage from '../pages/AuthPage'

export const APP_PATHES = {
    HOME: '/',
    REGISTER: '/register',
    LOGIN: '/login',
    ARTICLE: '/article/:id'
}

const App = () => {
    return (
        <div className='app'>
            <HashRouter>
            <HeaderComponent />
                <Switch>
                    <Route path={APP_PATHES.HOME} component={GlobalFeedPage} exact />
                    <Route path={APP_PATHES.LOGIN} component={AuthPage} />
                    <Route path={APP_PATHES.REGISTER} component={AuthPage} />
                    <Route path={APP_PATHES.ARTICLE} component={ArticlePage} />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App;
