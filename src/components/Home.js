import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'

import SelfImg from '../assets/self.jpg';

function Home (props) {
	const [headerText, setHeaderText] = useState('')
	const [currLetter, setCurrentLetter] = useState(0)
	const [hasUnderscore, setHasUnderscore] = useState(false)

 	const welcomeStringNBSP = "> Hello! I'm Maitray.&nbsp;"
 	const welcomeStringUS = "> Hello! I'm Maitray._"

	return (
		<div id="home">
			<div className="banner">
				<button className="menuToggle" onClick={props.toggleNavbar}>
					<BsList />
				</button>
				<img src={SelfImg} alt="MaitrayBhardwaj" target="_blank" className="selfImg" />
				<h1 className="welcome">{ headerText }</h1>
				<small>I'm a web developer!</small>
				<h3>Available on</h3>
				<div className="contacts">
					<a href="https://github.com/MaitrayBhardwaj" target="_blank" className="contact" title="Github">
						<FaGithub />
					</a>
					<a href="https://linkedin.com/in/maitray-bhardwaj" target="_blank" className="contact" title="LinkedIn">
						<FaLinkedin />
					</a>
					<a href="mailto:maitraybhardwaj@gmail.com" target="_blank" className="contact" title="Gmail">
						<FaEnvelope />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;