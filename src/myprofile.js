import React from 'react';
import ReactDOM from 'react-dom';
import Profile from 'Profile.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Profile />,
  document.getElementById('profile')
)
registerServiceWorker();
