import { useContext } from 'react';
import { UserContext } from '../context';

const Home = () => {
	const [ state, setState ] = useContext(UserContext);
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>home page </h1>
					{JSON.stringify(state)}
					<img src="/images/deno.jpeg" alt="" />
				</div>
			</div>
		</div>
	);
};
export default Home;
