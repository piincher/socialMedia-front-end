import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const EditPost = () => {
	const [ post, setPost ] = useState({});
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
		} catch (error) {
			toast.error('try again ');
		}
	};
	return <div>{JSON.stringify(post, null, 4)}</div>;
};
export default EditPost;
