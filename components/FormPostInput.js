import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const FormPostInput = ({ content, setContent }) => {
	return (
		<div className="card">
			<div className="card-body pb-1">
				<form className="form-group">
					<ReactQuill
						theme="snow"
						className="form-control"
						placeholder="Write a Post....."
						value={content}
						onChange={(e) => setContent(e)}
					/>
				</form>
			</div>
		</div>
	);
};

export default FormPostInput;
