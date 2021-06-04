/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import datafollowers from './demoData/datafollowers';
import dataRepos from './demoData/dataRepos';
import dataUser from './demoData/dataUser';

const GithubContext = React.createContext();

const GitubProvider = ({ children }) => {
    // const { children } = props;
    const [githubUser, setGithubUser] = useState(dataUser);
    const [githubRepos, setGithubRepos] = useState(dataRepos);
    const [githubFollowers, setGithubFollowers] = useState(datafollowers);

    return (
        <GithubContext.Provider value={{ githubUser, githubRepos, githubFollowers }}>
            {children}
        </GithubContext.Provider>
    );
};

/* eslint-disable prettier/prettier */
export { GithubContext, GitubProvider };

