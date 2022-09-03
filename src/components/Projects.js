import { BsList } from 'react-icons/bs'

import Project from './Project'

const projectList = [
	{
		name: "StudentForums",
		url: "https://github.com/MaitrayBhardwaj/StudentForums",
		hostedOn: "https://studentforums.maitraybhardwaj.repl.co/",
		desc: "A full stack student-specific forums website",
		techUsed: [
			"HTML5", "CSS3", "JS", "NodeJS", "ExpressJS", "MongoDB"
		]
	},
	{
		name: "Cinematic",
		url: "https://github.com/MaitrayBhardwaj/movie-app",
		hostedOn: "https://maitraybhardwaj.github.io/movie-app/",
		desc: "Simple movie app to browse info on movies and manage watch lists.",
		techUsed: [
			"React", "Firebase", "TailwindCSS", "Framer-motion", "React Router"
		]
	},
	{
		name: "OrderIn",
		url: "https://github.com/MaitrayBhardwaj/orderin",
		hostedOn: "https://maitraybhardwaj.github.io/orderin/",
		desc: "Simple ordering app with React and Firebase",
		techUsed: [
			'React', 'Firebase', 'TailwindCSS', 'Framer-motion'
		]
	},
	{
		name: "50Days50Projects",
		url: "https://github.com/MaitrayBhardwaj/50Days50Projects",
		hostedOn: "https://maitraybhardwaj.github.io/50Days50Projects/",
		desc: "50 mini HTML, CSS, JS projects in 50 days",
		techUsed: [
			"HTML5", "CSS3", "JS", "Axios"
		]
	},
	{
		name: "Tenzies",
		url: "https://github.com/MaitrayBhardwaj/tenzies-game",
		hostedOn: "https://maitraybhardwaj.github.io/tenzies-game",
		desc: "React app which simulates the Tenzies game",
		techUsed: [
			"CSS3", "React"
		]
	},
	{
		name: "Quizzical",
		url: "https://github.com/MaitrayBhardwaj/quizzical",
		hostedOn: "https://maitraybhardwaj.github.io/quizzical",
		desc: "Simple quiz app built with React",
		techUsed: [
			"CSS3", "React", "Axios"
		]
	},
	{
		name: "Chat App",
		url: "https://github.com/MaitrayBhardwaj/chat-app",
		hostedOn: "https://maitraybhardwaj.github.io/chat-app",
		desc: "Real time chat app built with React and Firebase",
		techUsed: [
			"CSS3", "React", "Firebase"
		]
	}
]

function Projects (props) {
	const projectElements = projectList.map((project, idx) => (
		<Project project={project} key= {idx} />
	))
	return (
		<div id="projects" 
			onClick={() => { props.isNavbar && props.toggleNavbar() }}>
			<div class="banner">
				<button className="menuToggle" aria-label='Show Navbar' onClick={props.toggleNavbar}>
					<BsList />
				</button>
				<h1># Projects</h1>
				<div class="projectList">
					{ projectElements }
				</div>
			</div>
		</div>
	)
}

export default Projects