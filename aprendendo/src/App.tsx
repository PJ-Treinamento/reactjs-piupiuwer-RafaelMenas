import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import './assets/styles/global.css';
import Routes from './routes/index';
import api from './api';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
