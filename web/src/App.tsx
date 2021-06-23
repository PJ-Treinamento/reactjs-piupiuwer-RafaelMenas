import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import './assets/styles/global.css';
import Routes from './routes/index';
import {AuthProvider } from './hooks/useAuth';

function App() {
  return (
    
    <BrowserRouter>
      <AuthProvider>
      <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
