import { motion } from 'framer-motion'

import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'

function Project(props) {
	const { project } = props
	return (
		<motion.div 
			className="proj"
			initial={{ x: 50, opacity: 0.25 }}
			animate={{ x: 0, opacity: 1 }}
		>
			<h2 className="projName">{project.name}</h2>
			<div className="projDesc">{project.desc}</div>
			<div className="projLinks">
				<a href={project.url} target="_blank" rel="noreferrer"><BsGithub /></a>
				{ project.hostedOn && <a href={project.hostedOn}><BsBoxArrowUpRight /></a> }
			</div>
			<div className="projTechList">
				{ project.techUsed.map(tech => (
					<span className="projTech">{tech}</span>
				)) }
			</div>
		</motion.div>
	)
}

export default Project