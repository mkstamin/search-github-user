import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GitubProvider } from './context/context';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-lr9u3-f4.jp.auth0.com"
            clientId="LxlO4Oev5aS5dkaXXzoZCqtNTPInij9T"
            redirectUri={window.location.origin}
        >
            <GitubProvider>
                <App />
            </GitubProvider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
