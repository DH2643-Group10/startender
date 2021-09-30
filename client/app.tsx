import React,{FC} from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './components/homeContainer/HomeContainer';
import './sass/app.scss';
import "./sass/style.scss"

const App: FC = () => {
    return (
    <div className='homecontainer'>
        <HomeContainer/>
    </div>)
}

ReactDOM.render(<App/>, document.querySelector('#app'))