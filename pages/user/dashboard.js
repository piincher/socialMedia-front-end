import { useContext, useState } from 'react';
import FormPostInput from '../../components/FormPostInput';
import PostList from '../../components/PostList';
import UserRoute from '../../components/Routes/UserRoute';
import { UserContext } from '../../context';
import UploadForm from '../../components/UploadForm';
import CreatePost from '../../components/CreatePost';
const Home = () => {
	const [ state, setState ] = useContext(UserContext);
	const [ image, setImage ] = useState({});
	const [ content, setContent ] = useState('');
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
						<CreatePost content={content} setContent={setContent} image={image} setImage={setImage} />
						<PostList />
					</div>
					<div className="col-md-4">sidebar</div>
				</div>
			</div>
		</UserRoute>
	);
};
export default Home;
