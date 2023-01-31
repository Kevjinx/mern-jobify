import mainImg from '../images/main-alternative.svg'
import Wrapper from '../wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Do irure proident commodo tempor fugiat pariatur anim labore quis sint consectetur Lorem dolor. Anim ad ex ea proident incididunt irure eu.
					</p>
					{/* Link is nested in landing, ie, /landing/register */}
					<Link to='./register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
				<div className='image'>
					<img src={mainImg} alt='job hunt' className='img main-img'/>
				</div>
			</div>
		</Wrapper>
	)
}
export default Landing