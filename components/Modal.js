import { Modal } from 'antd';
const Modal = ({ children, ...otherProps }) => {
	return (
		<div className="row">
			<div className="col">
				<Modal {...otherProps}>{children}</Modal>
			</div>
		</div>
	);
};
export default Modal;
