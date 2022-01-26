import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {


	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<header className='header'>
			<Link to='/' className='name-link'>
				Joey Chang
			</Link>
			<div className='header__nav'>
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
					<a
						href='https://docs.google.com/document/d/1EKujWp8x3uI6yy_Rl6EGJ_S7iPK-4S5UodDy6vIcLYM/edit?usp=sharing'
						target='_blank'
						rel='noreferrer noopener' className='anchor-resume'>
						Resume
					</a>
				</ul>
			</div>
		</header>
	);
}

export default Navigation;
