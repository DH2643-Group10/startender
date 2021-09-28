import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './components/homeContainer/HomeContainer';
import "./sass/style.scss"
const App = () => {
    return (
    <div className='homecontainer'>
        <HomeContainer/>
      
    </div>)
}

ReactDOM.render(<App/>, document.querySelector('#app'))