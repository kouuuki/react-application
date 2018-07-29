import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile'
import Header from './App';
import Reserve from './Table'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));

ReactDOM.render(<Profile />, document.getElementById('profile'));

ReactDOM.render(<Reserve />, document.getElementById('table'));

registerServiceWorker();
