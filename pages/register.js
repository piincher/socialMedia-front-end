import { useState } from 'react';
import FormInput from '../components/FormInput';

import ResetPasswordQuestion from '../utils/reset';
const Register = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ secret, setSecret ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, password, secret);
	};
	return (
		<div className="container-fluid">
			<div className="row py-5 bg-secondary text-light">
				<div className="col text-center">
					<h1>Register</h1>
				</div>
			</div>
			<div className="row py-5">
				<div className="col-md-6 offset-md-3">
					<form onSubmit={handleSubmit}>
						<FormInput
							label="name"
							type="text"
							value={name}
							placeholder="name"
							handleChange={(e) => setName(e.target.value)}
						/>
						<FormInput
							label="email"
							type="email"
							placeholder="email"
							value={email}
							handleChange={(e) => setEmail(e.target.value)}
						/>
						<FormInput
							label="password"
							type="password"
							placeholder="password"
							value={password}
							handleChange={(e) => setPassword(e.target.value)}
						/>
						<ResetPasswordQuestion />

						<FormInput
							type="text"
							placeholder="enter your answer"
							value={secret}
							handleChange={(e) => setSecret(e.target.value)}
						/>
						<div className="form-group p-2">
							<button className="btn btn-primary col-12">submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
