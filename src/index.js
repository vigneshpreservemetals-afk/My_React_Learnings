import React from 'react';
import ReactDOM from 'react-dom/client';

import DemoPage1 from './Website_Pages/DemoPage1';
import DemoPage2 from './Website_Pages/DemoPage2';
import DemoPage3 from './Website_Pages/DemoPage3';
import DemoPage4 from './Website_Pages/DemoPage4';
import DemoPage5 from './Website_Pages/DemoPage5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DemoPage5 />
  </React.StrictMode>
);
