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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className='home-tools'>
					<h3 align='left' className='tools-title'>
						Languages and Tools:
					</h3>
					<p align='left'>
						{' '}
						<a href='https://getbootstrap.com' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
								alt='bootstrap'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
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
						<a
							href='https://www.djangoproject.com/'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg'
								alt='django'
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
							href='https://www.adobe.com/in/products/illustrator.html'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg'
								alt='illustrator'
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
						<a href='https://www.python.org' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
								alt='python'
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
						<a href='https://reactnative.dev/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://reactnative.dev/img/header_logo.svg'
								alt='reactnative'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://sass-lang.com' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
								alt='sass'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://spring.io/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/springio/springio-icon.svg'
								alt='spring'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a
							href='https://www.typescriptlang.org/'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
								alt='typescript'
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
