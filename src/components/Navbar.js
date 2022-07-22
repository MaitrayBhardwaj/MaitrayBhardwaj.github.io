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
			<div className="menuLabel menu" onClick={props.toggleNavbar}>
				<button>
					<BsList />
				</button>
				<span></span>
			</div>
			<Link to="/">
				<div className="menuLabel home" onClick={props.toggleNavbar}>
					<button>
						<BsHouseFill />
					</button>
					<span>Home</span>
				</div>
			</Link>
			<Link to="/about">
				<div className="menuLabel about" onClick={props.toggleNavbar}>
					<button>
						<BsInfoCircle />
					</button>
					<span>About</span>
				</div>
			</Link>
			<Link to="/projects">
				<div className="menuLabel projects" onClick={props.toggleNavbar}>
					<button>
						<BsBox />
					</button>
					<span>Projects</span>
				</div>
			</Link>
			<Link to="/contact">
				<div className='menuLabel contactMe' onClick={props.toggleNavbar}>
					<button>
						<IoMdContacts />
					</button>
					<span>Contact Me</span>
				</div>
			</Link>
		</motion.nav>
	)
}

export default Navbar