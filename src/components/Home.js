import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'

import SelfImg from '../assets/self.jpg';

function Home (props) {
 	const welcomeString = "Hello! I'm Maitray."

	const [currLetter, setCurrentLetter] = useState(0)
	const [headerText, setHeaderText] = useState('')

  	useEffect(() => {
    	const timerID = setInterval(() => {
    		setHeaderText(prevText => {
    			if(currLetter < welcomeString.length){
    				setCurrentLetter(prevLetter => prevLetter + 1)
    				return `> ${welcomeString.substring(0, currLetter)}`
    			}
    			else{
    				clearInterval(timerID)
    				return `> ${welcomeString}`
	    		}
    		})
    	}, 150)
    	return () => clearInterval(timerID)
  	}, [welcomeString, currLetter])

	return (
		<div 
			id="home" 
			onClick={() => { props.isNavbar && props.toggleNavbar() }}>
			<div className="banner">
				<button className="menuToggle" onClick={props.toggleNavbar}>
					<BsList />
				</button>
				<motion.div className="banner-info" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }}>
					<motion.img
					 animate={{ scale: 1, x: 0 }}
					 initial={{ scale: 0 }}
					 src={SelfImg} alt="MaitrayBhardwaj" target="_blank" className="selfImg" />
					<h1 className="welcome">{ headerText }</h1>
					<small>I'm a web developer!</small>
					<h3>Available on</h3>
					<div className="contacts">
						<a href="https://github.com/MaitrayBhardwaj" target="_blank" rel="noreferrer" className="contact" title="Github">
							<FaGithub />
						</a>
						<a href="https://linkedin.com/in/maitray-bhardwaj" target="_blank" rel="noreferrer" className="contact" title="LinkedIn">
							<FaLinkedin />
						</a>
						<a href="mailto:maitraybhardwaj@gmail.com" target="_blank" rel="noreferrer" className="contact" title="Gmail">
							<FaEnvelope />
						</a>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default Home;