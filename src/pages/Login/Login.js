import React from 'react';
// import styled from 'styled-components';
import './Login.css';

const Login = () => (
    <div className="wrapper-login">
        <div className="container">
            <img src="/images/login-img.svg" alt="github user" />
            <h1>github user</h1>
            <button type="button" className="btn">
                login
            </button>
        </div>
    </div>
);

// eslint-disable-next-line no-unused-vars
// const Wrapper = styled.section`
//     min-height: 100vh;
//     display: grid;
//     place-items: center;
//     .container {
//         width: 90vw;
//         max-width: 600px;
//         text-align: center;
//     }
//     img {
//         margin-bottom: 2rem;
//     }
//     h1 {
//         margin-bottom: 1.5rem;
//     }
// `;
export default Login;
