// Dependencies
import { Routes, Route, Link } from 'react-router-dom';

// Componenets
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import SpaceCat from './components/SpaceCat/SpaceCat';
import Artic from './components/Artic/Artic';

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
					<Route path='/portfolio/spacecat' element={<SpaceCat />} />
					<Route path='/portfolio/articgallery' element={<Artic />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
