import React from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { Avatar } from 'antd';
const Post = ({ post }) => {
	return (
		<React.Fragment>
			<div className="card-header">
				<Avatar size={40}>{post.postedBy.name[0]}</Avatar>
				<span className="pt-2 ml-3" style={{ marginLeft: '1rem' }}>
					{post.postedBy.name}
				</span>
				<span className="pt-2 mr-3" style={{ marginLeft: '1rem' }}>
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
				<div>like comlike /unment</div>
			</div>
		</React.Fragment>
	);
};

export default Post;
