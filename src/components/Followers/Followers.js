import React, { useContext } from 'react';
import { GithubContext } from '../../context/context';
import './Followers.css';

const Followers = () => {
    const githubContextFollowers = useContext(GithubContext);
    const { githubFollowers } = githubContextFollowers;
    return (
        <div className="wrapper-followers">
            <div className="followers">
                {githubFollowers.map((follower) => {
                    const { avatar_url, html_url, login, id } = follower;
                    return (
                        <article key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>{html_url}</a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Followers;
