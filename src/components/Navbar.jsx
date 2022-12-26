import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { BsList, BsHouseFill, BsInfoCircle, BsBox } from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io'

function Navbar (props) {
	return (
		<motion.nav
			animate={{ x: 0 }}
			initial={{ x: -10 }}
			exit={{ x: -300 }}
			transition={{ type:"tween" }}
			className="navbar">
			<div className="menuLabel menu" aria-label='Hide Navbar' onClick={props.toggleNavbar}>
				<button>
					<BsList />
				</button>
				<span></span>
			</div>
			<Link to="/">
				<div className="menuLabel home" onClick={props.toggleNavbar}>
					<button aria-label='Home'>
						<BsHouseFill />
					</button>
					<span>Home</span>
				</div>
			</Link>
			<Link to="/about">
				<div className="menuLabel about" onClick={props.toggleNavbar}>
					<button aria-label='About'>
						<BsInfoCircle />
					</button>
					<span>About</span>
				</div>
			</Link>
			<Link to="/projects">
				<div className="menuLabel projects" onClick={props.toggleNavbar}>
					<button aria-label="Projects">
						<BsBox />
					</button>
					<span>Projects</span>
				</div>
			</Link>
			<Link to="/contact">
				<div className='menuLabel contactMe' onClick={props.toggleNavbar}>
					<button aria-label='Contact Me'>
						<IoMdContacts />
					</button>
					<span>Contact Me</span>
				</div>
			</Link>
		</motion.nav>
	)
}

export default Navbar