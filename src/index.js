import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var config = {
  apiKey: "AIzaSyA7wYCV8eK9hTzzgt2cLkoyiuJWQzyTdN8",
  authDomain: "chatdemo-cb58a.firebaseapp.com",
  databaseURL: "https://chatdemo-cb58a.firebaseio.com",
  projectId: "chatdemo-cb58a",
  storageBucket: "chatdemo-cb58a.appspot.com",
  messagingSenderId: "643087814740"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
