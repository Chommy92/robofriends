import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; 
import App from './App';


// to connect react with redux


// to pass down our store as prop to the app we gonnna wrap the app component
// in provider component and include store to the provider.

ReactDOM.render(
	
	  <App />,
    
	 document.getElementById('root'));
   
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
