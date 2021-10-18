/*
What goes in this file? This function sets the HTTP requests headers to

*/

import axios from 'axios';

const setAuthToken = token => {
    
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;