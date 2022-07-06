import { BsList, BsGeoAltFill, BsEnvelopeFill } from 'react-icons/bs'
import { 
	SiReact, SiJavascript, 
	SiMongodb, SiExpress,
	SiBootstrap, SiHtml5, 
	SiPython, SiNodedotjs, 
	SiCplusplus } from 'react-icons/si'

import { FaCss3 } from 'react-icons/fa'

import SelfImg from '../assets/self.jpg'
import Resume from '../assets/Resume.pdf'

function About (props) {
	return (
		<div id="about">
			<div className="banner">
				<button className="menuToggle" onClick={props.toggleNavbar}>
					<BsList />
				</button>
				<div className="info">
					<div className="bio">
						<img src={SelfImg} alt="Maitray Bhardwaj" />
						<div className="locMail">
							<div className="location">
								<div className="mapPin">
									<BsGeoAltFill />
								</div>
								<span>Delhi, India</span>
							</div>
							<div className="email">
								<div className="mailIcon">
									<BsEnvelopeFill />
								</div>
								<div className="copytoClipboard">
									<span>maitraybhardwaj@gmail.com</span>
									<small>Click to copy to clipboard</small>
								</div>
							</div>
						</div>
					</div>
					<h1># About Me</h1>
						<div className="desc">My name is Maitray Bhardwaj. I am a web developer. I am currently pursuing Bachelors in Computer Science(Hons.) from Hansraj College, Delhi University.
						<br />
						<br />
						I am a self motivated learner who can work both independently and collaboratively as a team. I am now learning ReactJS and Sass.
						<br />
						<br />
						I love working on fun projects and keeping up with the programming world that is constantly growing.
						</div>
					<h1># Skills</h1>
						<div className="desc">Even though I have experience in both frontend and backend, I have more confidence in my frontend skills. So, my main area of expertise is frontend development.
						<br />
						<br />
						As mentioned before, I also have experience working in backend development using NodeJS and popular Non-Relational Database Management Systems.
						</div>
						<div>
							<a target="_blank" href={Resume} download="" className="resume">
								<button>Resume</button>
							</a>
						</div>
					<h2>## Toolkit</h2>
					<div className="skills">
						<a href="https://reactjs.org" target="_blank" className="skill" title="React">
							<SiReact />
						</a>
						<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="skill" title="JavaScript">
							<SiJavascript />						
						</a>
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="skill" title="CSS3">
							<FaCss3 />
						</a>
						<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="skill" title="HTML5">
							<SiHtml5 />
						</a>
						<a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" className="skill" title="Bootstrapv5.2">
							<SiBootstrap />
						</a>
						<a href="https://nodejs.org/en/" target="_blank" className="skill" title="NodeJS">
							<SiNodedotjs />
						</a>
						<a href="https://expressjs.com" target="_blank" className="skill" title="ExpressJS">
							<SiExpress />
						</a>
						<a href="https://www.mongodb.com" target="_blank" className="skill" title="MongoDB">
							<SiMongodb />
						</a>
						<a href="https://www.python.org" target="_blank" className="skill" title="Python3">
							<SiPython />
						</a>
						<a href="https://cplusplus.com" target="_blank" className="skill" title="C++">
							<SiCplusplus />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About