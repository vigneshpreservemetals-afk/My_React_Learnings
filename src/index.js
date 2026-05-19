import React from 'react';
import ReactDOM from 'react-dom/client';

import Homepage from './pages/a-home/HomePage';
import ContactPage from './pages/c-contact/ContactPage'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  <Homepage/>
  <ContactPage/>

  </React.StrictMode>
);
