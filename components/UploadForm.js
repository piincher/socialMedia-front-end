import { useContext, useState, useEffect } from 'react';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { Avatar } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';

import CustomButton from './CustomButton';
import FormInput from './FormInput';

const UploadForm = ({ image, setImage }) => {
	const [ uploading, setUploading ] = useState(false);

	const router = useRouter();

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
		<div className="card-footer d-flex justify-content-between text-muted">
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
		</div>
	);
};

export default UploadForm;
