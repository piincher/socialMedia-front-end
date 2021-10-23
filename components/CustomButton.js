const CustomButton = ({ children, ...otherProps }) => {
	return (
		<div className="form-group p-2">
			<button {...otherProps}>{children}</button>
		</div>
	);
};

export default CustomButton;
