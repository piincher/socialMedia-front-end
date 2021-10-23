import { Avatar } from 'antd';
import CustomButton from './CustomButton';

const FormPostInput = () => {
	return (
		<div className="card">
			<div className="card-body pb-1">
				<form className="form-group">
					<textarea className="form-control" placeholder="Write a Post....." />
				</form>
			</div>
			<div className="card-footer">
				<CustomButton>Post</CustomButton>
			</div>
		</div>
	);
};

export default FormPostInput;
