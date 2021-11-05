import { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import axios from 'axios';
import { SyncOutlined } from '@ant-design/icons';
import CustomModal from '../../../components/Modal';

import FormInput from '../../../components/FormInput';

import ResetPasswordQuestion from '../../../utils/reset';
import CustomButton from '../../../components/CustomButton';
import { UserContext } from '../../../context';
const ProfileUpdate = () => {
	const [ name, setName ] = useState('');
    const [username,setUsername] = useState('')
    const [about,setAbout] = useState('')
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

			if (data.error) {
				toast.error(data.error);
				setLoading(false);
			} else {
				setName(''), setEmail(''), setPassword(''), setSecret('');
				setLoading(false);
				setOk(data.ok);
			}
		} catch (error) {
			toast.error(error.response.data);
			setLoading(false);
		}
	};
	
	return (
		<div className="container-fluid">
			<div className="row py-5 text-light bg-default-image">
				<div className="col text-center">
					<h1>Profile</h1>
				</div>
			</div>

			<div className="row py-5">
				<div className="col-md-6 offset-md-3">
					<form onSubmit={handleSubmit}>
                    <FormInput
							label="username"
							type="text"
							value={username}
							placeholder="username"
							handleChange={(e) => setUsername(e.target.value)}
						/>
                        <FormInput
							label="about"
							type="text"
							value={about}
							placeholder="about"
							handleChange={(e) => setAbout(e.target.value)}
						/>
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
						<CustomButton disabled={!name || !email || !password || !secret | loading}>
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
		</div>
	);
};

export default ProfileUpdate;
