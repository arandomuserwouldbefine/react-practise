import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PUBLIC_URL || "/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
