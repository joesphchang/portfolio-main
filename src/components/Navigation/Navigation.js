import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
	return (
		<header className='header'>
			<Link to='/' className='name-link'>Joey Chang</Link>
			<nav className='header__nav'>
				<ul>
					<li className='header__text'>
						<Link to='/'>Home</Link>
					</li>
					<li className='header__text'>
						<Link to='/portfolio'>Portfolio</Link>
					</li>
					<li className='header__text'>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
