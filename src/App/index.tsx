import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import './index.sass'

import HeaderComponent from '../components/HeaderComponent'

import GlobalFeedPage from '../pages/GlobalFeedPage';
import ArticlePage from '../pages/ArticlePage'
import AuthPage from '../pages/AuthPage'

import useCounter from '../hooks/useCounter';

export const APP_PATHES = {
    HOME: '/',
    REGISTER: '/register',
    LOGIN: '/login',
    ARTICLE: '/article/:id'
}

const App = () => {
    const [incA, decA, countA] = useCounter(10);
    const [incB, decB, countB] = useCounter(15);

    return (
        <div className='app'>
            <HashRouter>
            <HeaderComponent />
            <div className="counters">
                <h2>Использование простейшего кастомного хука: (ЛКМ++ | ПКМ--)</h2>
                <button onContextMenu={e => { e.preventDefault(); decA() } } onClick={incA}>CountA: {countA}</button>
                <button onContextMenu={e => { e.preventDefault(); decB() } } onClick={incB}>CountB: {countB}</button>
            </div>
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
