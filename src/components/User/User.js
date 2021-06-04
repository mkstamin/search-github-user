import React from 'react';
import Card from '../Card/Card';
import './User.css';

const User = () => (
    <section className="section">
        <div className="section-center">
            <div className="wrapper-user">
                <Card />
                {/* <Followers /> */}
            </div>
        </div>
    </section>
);

export default User;
