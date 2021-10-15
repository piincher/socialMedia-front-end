const Register = () => {
	return (
		<div className="container-fluid">
			<div className="row py-5 bg-secondary text-light">
				<div className="col text-center">
					<h1>Register</h1>
				</div>
			</div>
			<div className="row py-5">
				<div className="col-md-6 offset-md-3">
					<form>
						<div className="form-group p-2">
							<small>
								{' '}
								<label className="text-muted"> Your name</label>
							</small>
							<input type="text" className="form-control" placeholder="enter name" />
						</div>
						<div className="form-group p-2">
							<small>
								{' '}
								<label className="text-muted"> Email address</label>
							</small>
							<input type="email" className="form-control" placeholder="enter email" />
						</div>
						<div className="form-group p-2">
							<small>
								<label className="text-muted"> Your password</label>
							</small>
							<input type="password" className="form-control" placeholder="enter password" />
						</div>

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
						<div className="form-group p-2">
							<input type="text" className="form-control" placeholder="write your answer here" />
						</div>
						<div className="form-group p-2">
							<button className="btn btn-primary col-12">submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
