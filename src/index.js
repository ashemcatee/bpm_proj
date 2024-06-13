import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)

