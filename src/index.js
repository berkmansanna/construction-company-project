import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider as ThemeProviderMaterial } from '@mui/material/styles';
import themeMUI from 'theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/construction-company-project">
    <ThemeProviderMaterial theme={themeMUI}>
      <App />
      </ThemeProviderMaterial>
    </BrowserRouter>
  </React.StrictMode>
);
