/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import datafollowers from './demoData/datafollowers';
import dataRepos from './demoData/dataRepos';
import dataUser from './demoData/dataUser';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GitubProvider = ({ children }) => {
    // const { children } = props;
    const [githubUser, setGithubUser] = useState(dataUser);
    const [githubRepos, setGithubRepos] = useState(dataRepos);
    const [githubFollowers, setGithubFollowers] = useState(datafollowers);
    // loading
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    // error
    const [error, setError] = useState({ show: false, msg: '' });
    // error
    const toggleError = (show = false, msg = '') => {
        setError({ show, msg });
    };

    const searchGithubUser = async (user) => {
        // toggleError
        toggleError();
        // setloading
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err));

        if (response) {
            setGithubUser(response.data);
        } else {
            toggleError(true, 'There is no user with this user name');
        }
    };

    useEffect(() => {
        const checkRequest = async () => {
            try {
                const { data } = await axios(`${rootUrl}/rate_limit`);
                const {
                    rate: { remaining },
                } = data;
                setRequests(remaining);
                if (remaining === 0) {
                    // throw error
                    toggleError(true, 'Sorry, you have exeeded your hourly rate limit !');
                }
            } catch (err) {
                console.log(err);
            }
        };
        checkRequest();
    }, []);

    return (
        <GithubContext.Provider
            value={{ githubUser, githubRepos, githubFollowers, requests, error, searchGithubUser }}
        >
            {children}
        </GithubContext.Provider>
    );
};

/* eslint-disable prettier/prettier */
export { GithubContext, GitubProvider };

