import { useState } from 'react';
import Wrapper from "../wrappers/RegisterPage";
import { Logo, FormRow } from '../components'

//prefer to use local state for form data
const initiateState = {
	name: '',
	email: '',
	password: '',
	isUser: true,
}


const Register = () => {

	const [formData, setFormData] = useState(initiateState)

	const handleChange = (e) => {
		console.log('handleChange: ',e.target)
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleOnSubmit = (e) => {
		console.log('handleOnSubmit: ',e.target)
	}


	return (
		<Wrapper>
			<form>
				<Logo />
				<h3>Register</h3>
				<FormRow type='text' name='name' value={formData.name} handleChange={handleChange} />
				<FormRow type='email' name='email' value={formData.email} handleChange={handleChange} />
				<FormRow type='password' name='password' value={formData.password} handleChange={handleChange} />
				<FormRow type='checkbox' name='isUser' value={formData.isUser} handleChange={handleChange} labelText='Are you a user?' />
				<button onClick={handleOnSubmit}>Register</button>
			</form>

		</Wrapper>
	);
}
export default Register;