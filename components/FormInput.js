import React from 'react';

const FormInput = ({ label, handleChange, ...otherProps }) => {
	return (
		<div className="form-group p-2">
			<small> {label ? <label className="text-muted">{label}</label> : null}</small>
			<input {...otherProps} className="form-control" onChange={handleChange} />
		</div>
	);
};
export default FormInput;
