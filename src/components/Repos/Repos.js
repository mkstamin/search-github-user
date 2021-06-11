import React, { useContext } from 'react';
import { GithubContext } from '../../context/context';
import { Bar3D, Column3D, Doughnut2d, Pie3D } from '../Charts/index';
import './Repos.css';

const Repos = () => {
    const { githubRepos } = useContext(GithubContext);

    const languages = githubRepos.reduce((total, item) => {
        const totalLangu = total;
        const { language, stargazers_count } = item;
        if (!language) return totalLangu;
        if (!totalLangu[language]) {
            totalLangu[language] = { label: language, value: 1, stars: stargazers_count };
        } else {
            totalLangu[language] = {
                ...totalLangu[language],
                value: totalLangu[language].value + 1,
                stars: totalLangu[language].stars + stargazers_count,
            };
        }

        return totalLangu;
    }, {});

    // most used languages

    const mostUsed = Object.values(languages)
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

    // most stars per languages

    const mostPopuler = Object.values(languages)
        .sort((a, b) => b.stars - a.stars)
        .map((item) => ({ ...item, value: item.stars }))
        .slice(0, 5);

    // stars, froks

    let { stars, forks } = githubRepos.reduce(
        (t, item) => {
            const total = t;
            // eslint-disable-next-line no-shadow
            const { stargazers_count, name, forks } = item;
            total.stars[stargazers_count] = { label: name, value: stargazers_count };
            total.forks[forks] = { label: name, value: forks };
            return total;
        },
        {
            stars: {},
            forks: {},
        }
    );

    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();

    return (
        <section className="section">
            <div className="section-center">
                <div className="wrapper-repos">
                    <Pie3D data={mostUsed} />
                    <Column3D data={stars} />
                    <Doughnut2d data={mostPopuler} />
                    <Bar3D data={forks} />
                </div>
            </div>
        </section>
    );
};

export default Repos;
