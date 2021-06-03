import React from 'react';
import styled from 'styled-components';

function AuthWrapper() {
    return <h2>authwrapper component</h2>;
}

// eslint-disable-next-line no-unused-vars
const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    img {
        width: 150px;
    }
`;

export default AuthWrapper;
