import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GitubProvider = ({ children }) => {
    // const { children } = props;
    const [githubUser, setGithubUser] = useState({});
    const [githubRepos, setGithubRepos] = useState([]);
    const [githubFollowers, setGithubFollowers] = useState([]);
    // loading
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    // error
    const [error, setError] = useState({ show: false, msg: '' });

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

    const defaultGithubUser = async () => {
        setLoading(true);
        const response = await axios(`${rootUrl}/users/mkstamin`).catch((err) => console.log(err));

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
        setLoading(false);
    };

    useEffect(() => {
        defaultGithubUser();
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

export { GithubContext, GitubProvider };

