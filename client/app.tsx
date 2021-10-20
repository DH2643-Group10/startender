import React,{FC, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeContainer from './components/homeContainer/HomeContainer';
import './sass/app.scss';
import { Provider, useSelector } from 'react-redux';
import store, { RootStore } from "./Store";
import MyPageController from './components/myPage/MyPageController';
import HeaderController from './components/header/HeaderController';
import * as themeActions from "./actions/ThemeActions";
import { Button } from 'react-bootstrap';

const App: FC = () => {
    const themeState = useSelector((state: RootStore) => state.themeReducer);

    return (    
            <div className={'theme ' + (themeState.darkMode? 'theme--dark' : 'theme--default')}>
                    <Router>
                        <HeaderController />
                        <Switch>
                            <Route exact path="/">
                                <HomeContainer/>
                            </Route>
                            <Route path="/my-page">
                                <MyPageController/>
                            </Route>
                        </Switch>
                    </Router>
            </div>
)
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#app'))