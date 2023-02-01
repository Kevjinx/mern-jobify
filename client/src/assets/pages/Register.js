import { useState, useEffect } from 'react';
import Wrapper from "../wrappers/RegisterPage";
import { Logo, FormRow, Alert } from '../components'

//prefer to use local state for form data during development
//will use redux for this later
const initiateState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
	showAlert: false,
}


const Register = () => {

	const [formData, setFormData] = useState(initiateState)

	const toggleMember = () => {
		console.log('toggleMember: ',formData.isMember)
		setFormData({
			...formData,
			isMember: !formData.isMember
		})
	}




	//will replace the spread operator with reducers later
	const handleChange = (e) => {
		console.log('handleChange: ',e.target)
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()
		console.log('handleOnSubmit: ',e.target)
	}


	return (
		<Wrapper className='full-page'>
			<form className='form'>
				<Logo />
				<h3>{formData.isMember ? 'Login' : 'Register'}</h3>
				{formData.showAlert && <Alert />}
				{!formData.isMember && (
					<FormRow
						type='text'
						name='name'
						value={formData.name}
						handleChange={handleChange}
						labelText='Name'
					/>
				)}
				<FormRow
					type='email'
					name='email'
					value={formData.email}
					handleChange={handleChange}
					labelText='Email'
				/>
				<FormRow
					type='password'
					name='password'
					value={formData.password}
					handleChange={handleChange}
					labelText='Password'
				/>
				<button className='btn btn-block' onClick={handleOnSubmit}>
					{formData.isMember ? 'Login' : 'Register'}
				</button>
				<p>
					{formData.isMember ? 'Not a member yet?' : 'Already a member?'}

					<button type='button' onClick={toggleMember} className='member-btn'>
						{formData.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>

		</Wrapper>
	);
}
export default Register;