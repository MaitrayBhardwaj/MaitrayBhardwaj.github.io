import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
	const [isNavbar, setIsNavbar] = useState(false)

	const toggleNavbar = () => {
		setIsNavbar(prev => !prev)
	}

  	return (
    	<div className="App">
			{ isNavbar && <Navbar toggleNavbar={toggleNavbar} /> }
	    	<Router>
	    		<Routes>
	    			<Route path="/" element={ <Home toggleNavbar={toggleNavbar} /> } />
	    			<Route path="/about" element={ <About toggleNavbar={toggleNavbar} /> } />
	    			<Route path="/play" element={ <h1>PLay</h1> } />
	    		</Routes>
	    	</Router>
	    </div>
  	);
}

export default App;
