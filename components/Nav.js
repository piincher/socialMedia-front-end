import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../context';
const Nav = () => {
	const [ state, setState ] = useContext(UserContext);
	const router = useRouter();
	const logOut = () => {
		window.localStorage.removeItem('auth');
		setState(null);
		router.push('/login');
	};
	return (
		<nav className="nav  d-flex justify-content-between" style={{ backgroundColor: '#7fffd4' }}>
			<Link href="/">
				<a className="nav-link text-light">Home</a>
			</Link>

			<Link href="/login">
				<a className="nav-link text-light">Login</a>
			</Link>

			<Link href="/register">
				<a className="nav-link text-light">register</a>
			</Link>

			<a className="nav-link text-light" onClick={logOut}>
				logout
			</a>
		</nav>
	);
};

export default Nav;
