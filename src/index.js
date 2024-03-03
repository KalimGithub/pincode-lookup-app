import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import Postprovider from './context/PostProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Postprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Postprovider>
);
