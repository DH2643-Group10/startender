import React,{FC} from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './components/homeContainer/HomeContainer';
import './sass/app.scss';
import "./sass/style.scss";
import { Provider } from 'react-redux';
import store from "./Store";

const App: FC = () => {
    return (
    <Provider store={store}>
        <div className='homecontainer'>
            <HomeContainer/>
        </div>
    </Provider>)
}

ReactDOM.render(<App/>, document.querySelector('#app'))