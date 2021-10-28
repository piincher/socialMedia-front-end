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

			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropdown button
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li>
						<a className="dropdown-item" href="#">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</li>
				</ul>
			</div>
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
