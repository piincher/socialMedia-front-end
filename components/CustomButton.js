const CustomButton = ({ children, ...otherProps }) => {
	return (
		<div className="form-group p-2">
			<button className="btn btn-primary col-12" {...otherProps}>
				{children}
			</button>
		</div>
	);
};

export default CustomButton;
