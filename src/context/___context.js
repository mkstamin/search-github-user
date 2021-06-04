/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import datafollowers from './demoData/datafollowers';
import dataRepos from './demoData/dataRepos';
// import dataUser from './demoData/dataUser';

const githubUserUrl = 'https://api.github.com/users/mkstamin';

const GithubContext = React.createContext();

const GitubProvider = ({ children }) => {
    // const { children } = props;
    const [githubUser, setGithubUser] = useState({});
    const [githubRepos, setGithubRepos] = useState(dataRepos);
    const [githubFollowers, setGithubFollowers] = useState(datafollowers);

    const [user, setUser] = useState({});

    const fetchUserData = async () => {
        const data = await fetch(githubUserUrl);
        const gitUser = await data.json();
        setGithubUser(gitUser);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    console.log(githubUser);

    return (
        <GithubContext.Provider value={{ githubUser, githubRepos, githubFollowers }}>
            {children}
        </GithubContext.Provider>
    );
};

/* eslint-disable prettier/prettier */
export { GithubContext, GitubProvider };

