import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './components/homeContainer/HomeContainer';

const App = () => {
    return (
    <div>Hello World
        <HomeContainer/>
    </div>)
}

ReactDOM.render(<App/>, document.querySelector('#app'))