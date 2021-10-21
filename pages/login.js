import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import axios from 'axios';
import { SyncOutlined } from '@ant-design/icons';

import FormInput from '../components/FormInput';

import CustomButton from '../components/CustomButton';
import { UserContext } from '../context';
const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loading, setLoading ] = useState(false);

	const [ state, setState ] = useContext(UserContext);
	const router = useRouter();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const { data } = await axios.post(`/login`, {
				email,
				password
			});
			//update context
			setState({
				user: data.user,
				token: data.token
			});
			window.localStorage.setItem('auth', JSON.stringify(data));
			router.push('/');
			setLoading(false);
		} catch (error) {
			toast.error(error.response.data);
			setLoading(false);
		}
	};

	if (state && state.token) router.push('/');
	return (
		<div className="container-fluid">
			<div className="row py-5 text-light bg-default-image">
				<div className="col text-center">
					<h1>Login</h1>
				</div>
			</div>

			<div className="row py-5">
				<div className="col-md-6 offset-md-3">
					<form onSubmit={handleSubmit}>
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

						<CustomButton disabled={!email || !password}>
							{loading ? <SyncOutlined spin className="py-1" /> : 'Submit'}
						</CustomButton>
					</form>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<p className="text-center">
						you don't have an account ?
						<Link href="/register">
							<a>Register</a>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
