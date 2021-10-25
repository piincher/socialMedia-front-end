import React from 'react';
const Post = ({ post }) => {
	return (
		<React.Fragment>
			<div className="card-header">
				<div>image /name /data</div>
			</div>
			<div className="card-body">coneten</div>
			<div className="card-footer">like /unlike comment</div>
		</React.Fragment>
	);
};

export default Post;
