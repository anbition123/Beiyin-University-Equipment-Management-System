import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './views/layoutCom';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

