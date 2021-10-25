import { useContext, useState, useEffect } from 'react';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
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
	const [ image, setImage ] = useState({});
	const [ uploading, setUploading ] = useState(false);
	const [ posts, setPosts ] = useState([]);

	const router = useRouter();

	useEffect(
		() => {
			if (state && state.token) fetchUserPosts();
		},
		[ state && state.token ]
	);
	const fetchUserPosts = async () => {
		const { data } = await axios.get('/user-posts');
		setPosts(data);
	};
	const postSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post('/create-post', { content, image });
			console.log('data', data);
			if (data.error) {
				toast.error(data.error);
			} else {
				toast.success(' WOW!! Post created');
				setContent('');
				setImage({});
			}
		} catch (error) {
			console.log('error', error);
		}
	};

	const handleImage = async (e) => {
		const file = e.target.files[0];
		let formData = new FormData();
		formData.append('image', file);
		setUploading(true);
		try {
			const { data } = await axios.post('/image-upload', formData);
			//console.log('upload image', data);
			setImage({ url: data.url, public_id: data.public_id });
			setUploading(false);
		} catch (error) {
			console.log(error);
			setUploading(false);
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
					{image && image.url ? (
						<Avatar size={30} src={image.url} className="mt-1" />
					) : uploading ? (
						<LoadingOutlined />
					) : (
						<CameraOutlined className="mt-3" />
					)}
					<FormInput accept="images/*" type="file" hidden handleChange={handleImage} />
				</label>

				<pre>{JSON.stringify(posts, null, 4)}</pre>
			</div>
		</div>
	);
};

export default FormPostInput;
