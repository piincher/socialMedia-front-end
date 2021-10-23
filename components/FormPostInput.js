import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Avatar } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';

import CustomButton from './CustomButton';
import { UserContext } from '../context/index';

const FormPostInput = () => {
	const [ state, setState ] = useContext(UserContext);
	const [ content, setContent ] = useState('');

	const router = useRouter();

	const postSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post('/create-post', { content });
			console.log('data', data);
			if (data.error) {
				toast.error(data.error);
			} else {
				toast.success(' WOW!! Post created');
				setContent('');
			}
		} catch (error) {
			console.log('error', error);
		}
	};
	return (
		<div className="card">
			<div className="card-body pb-1">
				<form className="form-group">
					<textarea
						className="form-control"
						placeholder="Write a Post....."
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</form>
			</div>
			<div className="card-footer">
				<CustomButton
					className="btn btn-primary btn-sm mt-1"
					onClick={postSubmit}
					disabled={content.length === 0}
				>
					Post
				</CustomButton>
			</div>
		</div>
	);
};

export default FormPostInput;
