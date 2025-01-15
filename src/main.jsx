import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';

import './index.css';


// functional component
// Rules:
// 1. the name MUST start with big letter (PascalCase)
// 2. MUST return JSX
import App from './app/app';
import { num } from './app/app';
import{str} from './app/app'
console.log(num, str);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
 
  </React.StrictMode>,
);

// const h1 = document.createElement('h1')
// h1.textContent = 'Hello'
// document.getElementById('root').append(h1)
