import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { APP_PATHS } from '../constants/routes'
import './index.sass'

import HeaderComponent from '../components/HeaderComponent'

import GlobalFeedPage from '../pages/GlobalFeedPage';
import ArticlePage from '../pages/ArticlePage'
import AuthPage from '../pages/AuthPage'

import useCounter from '../hooks/useCounter';

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
                    <Route path={APP_PATHS.HOME} component={GlobalFeedPage} exact />
                    <Route path={APP_PATHS.LOGIN} component={AuthPage} />
                    <Route path={APP_PATHS.REGISTER} component={AuthPage} />
                    <Route path={APP_PATHS.ARTICLE} component={ArticlePage} />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App;
