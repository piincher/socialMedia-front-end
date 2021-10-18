import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, Fragment } from 'react';
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
			{state ? (
				<Fragment>
					<Link href="/user/dashboard">
						<a className="nav-link text-light">{state && state.user && state.user.name}</a>
					</Link>
					<a className="nav-link text-light" onClick={logOut}>
						logout
					</a>
				</Fragment>
			) : (
				<Fragment>
					<Link href="/login">
						<a className="nav-link text-light">Login</a>
					</Link>

					<Link href="/register">
						<a className="nav-link text-light">register</a>
					</Link>
				</Fragment>
			)}
		</nav>
	);
};

export default Nav;
