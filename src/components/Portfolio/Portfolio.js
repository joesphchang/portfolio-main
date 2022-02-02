import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
	const [portfolios, setPortfolios] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jojos-portfolio.herokuapp.com/api/portfolios')
			.then((res) => res.json())
			.then((res) => {
				setPortfolios(res);
			});
	}, []);

	if (loading && !portfolios.length) {
		return <h2>Loading ...</h2>;
	}
	return (
		<div className='card-wrapper'>
            <h2>Projects</h2>
			<ul className='main-card'>
				{portfolios.map((portfolio) => {
					return (
						<li className='card-list'>
							<Link to={`/portfolio/${portfolio._id}`}>
                                <img src={portfolio.image} alt={portfolio.title} className='card-image'/>
								<h3 className='card-title'>{portfolio.title}</h3>
								
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Portfolio;
