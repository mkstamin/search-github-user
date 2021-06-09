/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import datafollowers from './demoData/datafollowers';
import dataRepos from './demoData/dataRepos';
// import dataUser from './demoData/dataUser';

const rootUrl = 'https://api.github.com';
const githubUserUrl = 'https://api.github.com/users/mkstamin';

const GithubContext = React.createContext();

const GitubProvider = ({ children }) => {
    // const { children } = props;
    const [githubUser, setGithubUser] = useState([]);
    const [githubRepos, setGithubRepos] = useState(dataRepos);
    const [githubFollowers, setGithubFollowers] = useState(datafollowers);
    // loading
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    // error
    const [error, setError] = useState({ show: false, msg: '' });

    // const fetchUserData = async () => {
    //     const data = await fetch(githubUserUrl);
    //     const gitUser = await data.json();
    //     setGithubUser(gitUser);
    // };

    console.log(githubUser);

    // error
    const toggleError = (show = false, msg = '') => {
        setError({ show, msg });
    };

    const checkRequest = useCallback(async () => {
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
    }, []);

    const searchGithubUser = async (user) => {
        toggleError();
        setLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err));

        if (response) {
            setGithubUser(response.data);
            const { login, followers_url } = response.data;
            // //repos
            axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((res) => {
                setGithubRepos(res.data);
            });
            // followers
            axios(`${followers_url}?per_page=100`).then((res) => {
                setGithubFollowers(res.data);
            });
        } else {
            toggleError(true, 'There is no user with this user name');
        }
        checkRequest();
        setLoading(false);
    };

    useEffect(() => {
        axios(githubUserUrl).then((res) => {
            setGithubUser(res.data);
        });
        // fetchUserData();
    }, []);

    useEffect(() => {
        checkRequest();
    }, [checkRequest]);

    return (
        <GithubContext.Provider
            value={{
                githubUser,
                githubRepos,
                githubFollowers,
                requests,
                error,
                searchGithubUser,
                loading,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};

/* eslint-disable prettier/prettier */
export { GithubContext, GitubProvider };

