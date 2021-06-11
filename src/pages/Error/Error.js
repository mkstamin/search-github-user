import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import './Error.css';

const Error = () => (
    <div className="wrapper-error">
        <div>
            <h1>404</h1>
            <h3>sorry, the page you tried can no be found</h3>
            <Link to="/" className="btn">
                back home
            </Link>
        </div>
    </div>
);

export default Error;
