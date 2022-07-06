import { BsList, BsHouseFill, BsInfoCircle, BsBox } from 'react-icons/bs'

function Navbar (props) {
	return (
		<nav class="navbar">
			<div class="menuLabel menu">
				<button onClick={props.toggleNavbar}>
					<BsList />
				</button>
				<span></span>
			</div>
			<div class="menuLabel home">
				<button>
					<BsHouseFill />
				</button>
				<span>Home</span>
			</div>
			<div class="menuLabel about">
				<button>
					<BsInfoCircle />
				</button>
				<span>About</span>
			</div>
			<div class="menuLabel projects">
				<button>
					<BsBox />
				</button>
				<span>Projects</span>
			</div>
		</nav>		
	)
}

export default Navbar