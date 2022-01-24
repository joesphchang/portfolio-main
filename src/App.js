// Dependencies
import { Routes, Route, Link } from 'react-router-dom';

// Componenets
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import LinkedIn from './components/assets/linkedin.png';
import GitHub from './components/assets/github.png';
import PortfolioDetails from './components/PortfolioDetails/PortfolioDetails';

// Stylesheets
import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='app-navigation'>
				<Navigation />
			</div>
			<div className='wrapper'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/portfolio/:id' element={<PortfolioDetails />} />
				</Routes>
			</div>
			<footer>
				<div className='main-footer'>
				<h4 className='main-title'>Website by Joey Chang</h4>
				<div className='icons'>
				<a
					href='https://www.linkedin.com/in/joesphchang/'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={LinkedIn} />
				</a>
				<a
					href='https://github.com/joesphchang'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={GitHub} />
				</a>
				</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
