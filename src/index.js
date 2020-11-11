import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import Header from './Header';
import Footer from './Footer';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
    <Header />
    <App />
    <App2 />
    <App3 />
    <App4 />
    <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

