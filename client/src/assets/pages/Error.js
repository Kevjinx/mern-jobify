import Wrapper from "../wrappers/ErrorPage";
import { Link } from 'react-router-dom';
import notFoundImg from '../images/not-found.svg'

const Error = () => {
	return (
		<Wrapper className='full-page'>
			<div>
				<h1>Error</h1>
				<img src={notFoundImg} alt="not found" />
				<p>Page not found</p>
				<Link to="/">Go back to home</Link>
			</div>
		</Wrapper>
	);
}
export default Error;