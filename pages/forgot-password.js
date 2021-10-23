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
const ForgotPassword = () => {
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
			// console.log(name, email, password, secret);
			setLoading(true);
			const { data } = await axios.post(`/forgot-password`, {
				email,
				password,
				secret
			});

			console.log('forgot password res => ', data);

			if (data.error) {
				toast.error(data.error);
				setLoading(false);
			}

			if (data.success) {
				setEmail('');
				setPassword('');
				setSecret('');
				setOk(true);
				setLoading(false);
			}
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};
	if (state && state.token) router.push('/');
	return (
		<div className="container-fluid">
			<div className="row py-5 text-light bg-default-image">
				<div className="col text-center">
					<h1>Reset Password</h1>
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
							placeholder="enter new password"
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
						<CustomButton disabled={!email || !password || !secret || loading}>
							{loading ? <SyncOutlined spin className="py-1" /> : 'Submit'}
						</CustomButton>
					</form>
				</div>
			</div>
			<CustomModal title="congratulation" visible={ok} onCancel={() => setOk(false)} footer={null}>
				<p>congrats!! you can now login with your new password</p>
				<Link href="/login">
					<a className="btn btn-primary btn-sm">Login</a>
				</Link>
			</CustomModal>
		</div>
	);
};

export default ForgotPassword;
