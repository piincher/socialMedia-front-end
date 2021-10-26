import { useRouter } from 'next/router';
const EditPost = () => {
	const router = useRouter();
	const _id = router.query._id;

	return <div>jelo{_id}</div>;
};
export default EditPost;
