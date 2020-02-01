import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';

ReactDOM.render(
    <BrowserRouter>
        <AuthContext.Provider>
            <App />
        </AuthContext.Provider>
    </BrowserRouter>, document.getElementById('root'));



