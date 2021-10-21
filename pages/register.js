import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import axios from 'axios';
import { SyncOutlined } from '@ant-design/icons';
import CustomModal from '../components/Modal';

import FormInput from '../components/FormInput';

import ResetPasswordQuestion from '../utils/reset';
import CustomButton from '../components/CustomButton';
import { UserContext } from '../context';
const Register = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ secret, setSecret ] = useState('');
	const [ ok, setOk ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const router = useRouter();

	const [ state ] = useContext(UserContext);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const { data } = await axios.post(`/register`, {
				name,
				email,
				password,
				secret
			});

			setName(''), setEmail(''), setPassword(''), setSecret('');
			setLoading(false);
			setOk(data.ok);
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
						<CustomButton disabled={!name || !email || !password || !secret}>
							{loading ? <SyncOutlined spin className="py-1" /> : 'Submit'}
						</CustomButton>
					</form>
				</div>
			</div>
			<CustomModal title="congratulation" visible={ok} onCancel={() => setOk(false)} footer={null}>
				<p>you have successfull register</p>
				<Link href="/login">
					<a className="btn btn-primary btn-sm">Login</a>
				</Link>
			</CustomModal>

			<div className="row">
				<div className="col">
					<p className="text-center">
						Already register ?
						<Link href="/login">
							<a>Login</a>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
