import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context';

import Post from './Post';
const PostList = () => {
	const [ state, setState ] = useContext(UserContext);
	const [ posts, setPosts ] = useState([]);

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
	return (
		<React.Fragment>
			{posts &&
				posts.map((post) => (
					<div key={post._id} className="card mb-5">
						<Post post={post} />
					</div>
				))}
		</React.Fragment>
	);
};

export default PostList;
