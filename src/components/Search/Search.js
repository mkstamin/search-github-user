import React, { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../../context/context';
import './Search.css';

const Search = () => {
    const [user, setUser] = useState('');
    const { requests, error, searchGithubUser, loading } = useContext(GithubContext);

    // get things from global context
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            searchGithubUser(user);
        }
    };
    return (
        <section className="section">
            <div className="section-center">
                <div className="wrapper-search">
                    {error.show && (
                        <div className="errorWrapper-search">
                            <p>{error.msg}</p>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <MdSearch />
                            <input
                                type="text"
                                placeholder="enter github user name"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                            {requests > 0 && !loading && <button type="submit">search</button>}
                        </div>
                    </form>
                    <h3>reuests: {requests}/60</h3>
                </div>
            </div>
        </section>
    );
};

export default Search;
