import React from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { Avatar } from 'antd';
import { HeartOutlined, HeartFilled, CommentOutlined } from '@ant-design/icons';
const Post = ({ post }) => {
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
				</div>
			</div>
		</React.Fragment>
	);
};

export default Post;
