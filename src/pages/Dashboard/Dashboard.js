import React from 'react';
import { Info, Navbar, Repos, Search, User } from '../../components/index';

const Dashboard = () => (
    <main>
        <Navbar />
        <Search />
        <Info />
        <User />
        <Repos />
    </main>
);

export default Dashboard;
