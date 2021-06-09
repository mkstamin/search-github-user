import React, { useContext } from 'react';
import { Info, Navbar, Repos, Search, User } from '../../components/index';
import { GithubContext } from '../../context/context';

const Dashboard = () => {
    const { loading } = useContext(GithubContext);
    if (loading) {
        return (
            <main>
                <Navbar />
                <Search />
                <img className="loading-img" src="images/preloader.gif" alt="loding_img" />
            </main>
        );
    }
    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    );
};

export default Dashboard;
