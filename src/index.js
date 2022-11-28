import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import {theme} from 'loft-taxi-mui-theme';
import {ThemeProvider} from '@mui/material/styles';
import {AuthProvider} from './contexts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </AuthProvider>
);

