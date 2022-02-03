import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './index.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
    < Router >
        <App />
        <ToastContainer />
    </Router >
    , document.getElementById('root')
);