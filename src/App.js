import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { doc, updateDoc, increment } from "firebase/firestore";

import { db } from './firebase'

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';

function App() {
	const [isNavbar, setIsNavbar] = useState(false)
	
	useEffect(() => {
		const viewsRef = doc(db, "views", "views");
		
		updateDoc(viewsRef, {
			views: increment(1)
		})
	}, [])

	const toggleNavbar = () => {
		setIsNavbar(prev => !prev)
	}

  	return (
    	<div className="App">
    		<AnimatePresence>
				{ isNavbar && <Navbar isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> }
			</AnimatePresence>
    		<Routes>
				<Route path="/contact" 
					element={ <Contact isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> }/>
    			<Route path="/about" 
    				element={ <About isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> } />
    			<Route path="/projects" 
    				element={ <Projects isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> } />
    			<Route path="/" 
    				element={ <Home isNavbar={isNavbar} toggleNavbar={toggleNavbar} /> } />
    		</Routes>
	    </div>
  	);
}

export default App;
