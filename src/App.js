import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'

function App() {
	const [isNavbar, setIsNavbar] = useState(false)

	const toggleNavbar = () => {
		setIsNavbar(prev => !prev)
	}

  	return (
    	<div className="App">
	    	<Router>
	    		<AnimatePresence>
					{ isNavbar && <Navbar isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> }
				</AnimatePresence>
	    		<Routes>
	    			<Route path="/" 
	    				element={ <Home isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> } />
	    			<Route path="/about" 
	    				element={ <About isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> } />
	    			<Route path="/projects" 
	    				element={ <Projects isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> } />
	    		</Routes>
	    	</Router>
	    </div>
  	);
}

export default App;
