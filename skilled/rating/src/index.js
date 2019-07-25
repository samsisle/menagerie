/**
 * Source : https://www.skilledinc.com/app/feedback-details/2243
 * Author : Samuel Ko
 * Date   : 2019-07-16
 *
 * Self-assessment:
 * I didn't do too hot on this one. Most of the work on here is
 * post work to get a hang of the stuff I should have been done.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './lib/serviceWorker';

import './css/index.css';

ReactDOM.render(<App />, document.getElementById('rating'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
