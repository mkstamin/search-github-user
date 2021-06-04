import React, { useContext } from 'react';
import { FiUser, FiUserPlus } from 'react-icons/fi';
import { GoGist, GoRepo } from 'react-icons/go';
import { GithubContext } from '../../context/context';
import './Info.css';

const Info = () => {
    const { githubUser } = useContext(GithubContext);
    const { public_repos, followers, following, public_gists } = githubUser;

    const items = [
        {
            id: 1,
            icon: <GoRepo className="icon" />,
            label: 'repos',
            value: public_repos,
            color: 'pink',
        },
        {
            id: 2,
            icon: <FiUser className="icon" />,
            label: 'followers',
            value: followers,
            color: 'green',
        },
        {
            id: 3,
            icon: <FiUserPlus className="icon" />,
            label: 'following',
            value: following,
            color: 'purple',
        },
        {
            id: 4,
            icon: <GoGist className="icon" />,
            label: 'gists',
            value: public_gists,
            color: 'yellow',
        },
    ];

    console.log(githubUser.public_gists);
    return (
        <section className="section">
            <div className="section-center">
                <div className="wrapper-info">
                    {items.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Item = (props) => {
    const { item } = props;
    const { icon, label, value, color } = item;
    return (
        <article className="item">
            <span className={color}>{icon}</span>
            <div>
                <h3>{value}</h3>
                <p>{label}</p>
            </div>
        </article>
    );
};

export default Info;
