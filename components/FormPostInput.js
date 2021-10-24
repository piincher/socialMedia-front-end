import { useContext, useState } from 'react';
import { CameraOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import { Avatar } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';

import CustomButton from './CustomButton';
import { UserContext } from '../context/index';
import FormInput from './FormInput';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
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

	const handleImage = async (e) => {
		const file = e.target.files[0];
		let formData = new FormData();
		formData.append('image', file);
		console.log([ ...formData ]);

		try {
			const { data } = await axios.post('/image-upload', { formData });
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="card">
			<div className="card-body pb-1">
				<form className="form-group">
					<ReactQuill
						theme="snow"
						className="form-control"
						placeholder="Write a Post....."
						value={content}
						onChange={(e) => setContent(e)}
					/>
				</form>
			</div>

			<div className="card-footer d-flex justify-content-between text-muted">
				<CustomButton
					className="btn btn-primary btn-sm mt-1"
					onClick={postSubmit}
					disabled={content.length === 0}
				>
					Post
				</CustomButton>
				<label>
					{' '}
					<CameraOutlined className="mt-3" />
					<FormInput accept="images/*" type="file" hidden handleChange={handleImage} />
				</label>
			</div>
		</div>
	);
};

export default FormPostInput;
