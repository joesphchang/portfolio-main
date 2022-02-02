import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './PortfolioDetails.css';
import axios from 'axios';

function PortfolioDetails(props) {
	const [details, setDetails] = useState(null);

	const { id } = useParams();

	async function getPortfolio() {
		try {
			const res = await fetch(
				`https://jojos-portfolio.herokuapp.com/api/portfolios/${id}`
			);
			const data = await res.json();
			setDetails(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getPortfolio();
		return setDetails(null);
	}, []);

	if (!details) {
		return <div>Project is still loading ...</div>;
	}

	return (
		<div className='details-wrapper'>
			<img src={details.image} alt={details.title} className='details-image' />
			<div className='details-box'>
				<h3 className='details-title'>{details.title}</h3>
				<p className='details-description'>{details.description}</p>
				<div className='details-created-with'>
					<h4>
						Created with <span className='details-created'>{details.created}</span>
					</h4>
				</div>
				<div className='details-deployed-with'>
					<h4>
						Deployed with <span className='details-deployed'>{details.deployed}</span>
					</h4>
				</div>
				<div className='anchor-links'>
					<a
						href={details.deployed_site}
						rel='noopener noreferrer'
						target='_blank'>
						Live Webiste
					</a>
					<a href={details.github} rel='noopener noreferrer' target='_blank'>
						Github
					</a>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
