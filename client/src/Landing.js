import React from 'react'
import logo from './assets/images/logo.svg'
import mainImg from './assets/images/main.svg'
import styled from 'styled-components'


const Landing = () => {
	return (
		<Wrapper>
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
					<img src={mainImg} alt='job hunt' className='img main-img'/>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.main`
	nav {
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: 2rem;
	}
	h1{
		font-weight: 700;
		span {
			/* you can NEST!!!! */
			color: var(--primary-500);
		}
	}
	p {
		color: var(--gray-600);
	}
	.main-img {
		display: none;
	}
	@media (min-width: 1000px) {
		.page {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}
		.main-img {
			display: block;
		}
	}
`

export default Landing