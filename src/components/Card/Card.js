import React, { useContext } from 'react';
import { MdBusiness, MdLink, MdLocationOn } from 'react-icons/md';
import { GithubContext } from '../../context/context';
import './Card.css';

const Card = () => {
    const githubContextData = useContext(GithubContext);
    const { githubUser } = githubContextData;
    const { avatar_url, html_url, name, company, blog, bio, location, twitter_username } =
        githubUser;
    return (
        <div className="wrapper-card ">
            <header>
                <img src={avatar_url} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>{`@${twitter_username} || ${null}`}</p>
                </div>
                <a href={html_url}>follow</a>
            </header>
            <p className="bio">{bio}</p>
            <div className="links">
                <p>
                    <MdBusiness />
                    {company}
                </p>
                <p>
                    <MdLocationOn />
                    {location}
                </p>
                <a href={blog}>
                    <MdLink />
                    {blog}
                </a>
            </div>
        </div>
    );
};

export default Card;
