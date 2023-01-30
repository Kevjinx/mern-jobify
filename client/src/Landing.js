import React from 'react'
import logo from './assets/images/logo.svg'
import main from './assets/images/main.svg'
import styled from 'styled-components'


const Landing = () => {
	return (
		<main>
			<nav>
				<img src={logo} alt='logo' className='logo' />
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
					<img src={main} alt='job hunt' className='img main-img'/>
				</div>
			</div>
		</main>
	)
}

export default Landing