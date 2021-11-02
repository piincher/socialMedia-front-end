import React, { useContext } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { Avatar } from 'antd';
import { HeartOutlined, CommentOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { UserContext } from '../context/index';
import { toast } from 'react-toastify';
const Post = ({ post, fetchUserPosts }) => {
	const [ state, setState ] = useContext(UserContext);
	const router = useRouter();

	const deletePost = async (post) => {
		try {
			const answer = window.confirm('are you sure');
			if (!answer) return;
			const { data } = await axios.delete(`/delete-post/${post._id}`);
			toast.error('post delete ');
			fetchUserPosts();
		} catch (error) {}
	};
	return (
		<React.Fragment>
			<div className="card-header">
				<Avatar size={40}>{post.postedBy.name[0]}</Avatar>
				<span className="pt-2 ml-3" style={{ marginLeft: '1rem' }}>
					{post.postedBy.name}
				</span>
				<span className="pt-2 ml-3" style={{ marginLeft: '1rem' }}>
					{moment(post.createdAt).fromNow()}
				</span>
			</div>
			<div className="card-body">{renderHTML(post.content)}</div>
			<div className="card-footer">
				{post.image && (
					<div
						style={{
							backgroundImage: 'url(' + post.image.url + ')',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center center',
							backgroundSize: 'cover',
							height: '300px'
						}}
					/>
				)}
				<div className="d-flex pt-2">
					<HeartOutlined className="text-danger pt-2 h5" />
					<div className="pt-2 pl-3" style={{ marginRight: '2rem' }}>
						like
					</div>
					<CommentOutlined className="text-danger pt-2 h5 pl-5" />
					<div className="pt-2 pl-3"> 2 comments</div>

					{state &&
					state.user &&
					state.user._id === post.postedBy._id && (
						<React.Fragment>
							<EditOutlined
								className="text-danger pt-2 h5 px-2 mx-auto"
								onClick={() => router.push(`/user/post/${post._id}`)}
							/>
							<DeleteOutlined className="text-danger pt-2 h5 px-2" onClick={() => deletePost(post)} />
						</React.Fragment>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Post;
