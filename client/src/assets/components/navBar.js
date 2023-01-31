import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/Navbar';

const NavBar = () => {
	return (
		<Wrapper>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/register">Register</Link>
				<Link to="/landing">Landing</Link>
			</nav>
		</Wrapper>
	)
}

export default NavBar;