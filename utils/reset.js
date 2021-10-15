const ResetPasswordQuestion = () => {
	return (
		<div className="form-group p-2">
			<small>
				<label className="text-muted"> Pick a question</label>
			</small>
			<select className="form-control">
				<option>What is favorite color</option>
				<option>What is best friend's name</option>
				<option>What is city you were born</option>
			</select>

			<small className="form-text text-muted"> you can use this to reset your password</small>
		</div>
	);
};

export default ResetPasswordQuestion;
