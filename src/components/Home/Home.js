import React from 'react';
import './Home.css';
import Joey from '../assets/home-image.jpg';

function Home(props) {
	return (
		<div className='home-wrapper'>
			<div className='home-textbox'>
				<img className='home-image' src={Joey} alt='Joey Chang on Film' />
			</div>
			<div className='text-box-wrapper'>
				<div className='text-box'>
					<h3 className='home-title' align='left'>
						About Me
					</h3>
					<p className='home-text'>
						A software engineer with a creative and photographic professional
						background allows him to create thoughtful and interactive websites.
						Over 4 years of experience in project-management, creative direction
						and effective communcation with demonstrated history working
						along-side professional teams to deliver optimized product
						experiences. Passionate about transforming ideas into tangible
						innovations.
					</p>
				</div>
				<div className='home-tools'>
					<h3 align='left' className='tools-title'>
						Languages and Tools:
					</h3>
					<p align='left'>
						{' '}
						<a
							href='https://www.w3schools.com/css/'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
								alt='css3'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://expressjs.com' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
								alt='express'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://www.figma.com/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
								alt='figma'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
								alt='git'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://heroku.com' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'
								alt='heroku'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://www.w3.org/html/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
								alt='html5'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a
							href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
								alt='javascript'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						{' '}
						<a href='https://mochajs.org' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg'
								alt='mocha'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://www.mongodb.com/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
								alt='mongodb'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://nodejs.org' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
								alt='nodejs'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a
							href='https://www.photoshop.com/en'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg'
								alt='photoshop'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a
							href='https://www.postgresql.org'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
								alt='postgresql'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://postman.com' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
								alt='postman'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
								alt='react'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
