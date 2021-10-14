import React,{FC} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeContainer from './components/homeContainer/HomeContainer';
import './sass/app.scss';
import "./sass/style.scss";
import { Provider } from 'react-redux';
import store from "./Store";
import MyPageController from './components/myPage/MyPageController';
import HeaderController from './components/header/HeaderController';

const App: FC = () => {

    return (    
        <Provider store={store}>
            <Router>
                <HeaderController/>
                <Switch>
                    <Route exact path="/">
                        <HomeContainer/>
                    </Route>
                    <Route path="/my-page">
                        <MyPageController/>
                    </Route>
                </Switch>
            </Router>
        </Provider>)
}

ReactDOM.render(<App/>, document.querySelector('#app'))