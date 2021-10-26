import axios from 'axios';
import { toast } from 'react-toastify';

import CustomButton from './CustomButton';

const UpdatePost = ({ content, image, _id }) => {
	const postSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.put(`/update-post/${_id}`, { content, image });
			console.log('data', data);
			if (data.error) {
				toast.error(data.error);
			} else {
				toast.success(' WOW!! Post created');
				router.push('/user/dashboard');
			}
		} catch (error) {
			console.log('error', error);
		}
	};
	return (
		<CustomButton className="btn btn-primary btn-sm mt-1" onClick={postSubmit} disabled={content.length === 0}>
			Post
		</CustomButton>
	);
};

export default UpdatePost;
