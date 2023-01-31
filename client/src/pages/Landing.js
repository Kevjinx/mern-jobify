import React from 'react'
import mainImg from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../assets/component/index'

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
					<button className='btn btn-hero'>Login/Register</button>
				</div>
				<div className='image'>
					<img src={mainImg} alt='job hunt' className='img main-img'/>
				</div>
			</div>
		</Wrapper>
	)
}
export default Landing