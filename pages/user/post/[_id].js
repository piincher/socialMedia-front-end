import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import UserRoute from '../../../components/Routes/UserRoute';
import UploadForm from '../../../components/UploadForm';
import FormPostInput from '../../../components/FormPostInput';
import UpdatePost from '../../../components/UpdatePost';

const EditPost = () => {
	const [ post, setPost ] = useState({});
	const [ content, setContent ] = useState('');
	const [ image, setImage ] = useState('');
	const router = useRouter();
	const _id = router.query._id;

	useEffect(
		() => {
			if (_id) fetchPost();
		},
		[ _id ]
	);

	const fetchPost = async () => {
		try {
			const { data } = await axios.get(`/user-post/${_id}`);

			setPost(data);
			setContent(data.content);
			setImage(data.image);
		} catch (error) {
			toast.error('try again ');
		}
	};
	return (
		<UserRoute>
			<div className="container-fluid">
				<div className="row py-5 text-light bg-default-image">
					<div className="col text-center">
						<h1>new feeds</h1>
					</div>
				</div>
				<div className="row py-3">
					<div className="col-md-8">
						<FormPostInput content={content} setContent={setContent} />
						<UploadForm image={image} setImage={setImage} />
						<UpdatePost content={content} _id={_id} image={image} />
					</div>
				</div>
			</div>
		</UserRoute>
	);
};
export default EditPost;
