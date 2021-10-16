import React,{FC, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeContainer from './components/homeContainer/HomeContainer';
import './sass/app.scss';
import "./sass/style.scss";
import { Provider } from 'react-redux';
import store from "./Store";
import MyPageController from './components/myPage/MyPageController';
import HeaderController from './components/header/HeaderController';
import { Button } from 'react-bootstrap';

const App: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const handleThemeChange = () => setDarkMode(!darkMode);

    
    const handleDarkMode = { 
        darkMode: darkMode,
        handleThemeChange: handleThemeChange
      }

    return (    
        
        <Provider store={store}>
            <div className={'theme ' + (darkMode ? 'theme--dark' : 'theme--default')}>
                <Router>
                    <HeaderController {...handleDarkMode} />
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
        </Provider>)
}

ReactDOM.render(<App/>, document.querySelector('#app'))