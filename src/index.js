// src/index.js
import React from "react";
import ReactDOM from "react-dom";

import App from './App';
import Hello from "./Hello";


const root = ReactDOM.createRoot(
    document.getElementById('root') 
  );
  root.render(
    <React.StrictMode>
      <Hello />
    </React.StrictMode>
  );
  
 
  