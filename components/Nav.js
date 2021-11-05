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
				<div className="dropdown">
					<button
						className="btn dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{state && state.user && state.user.name}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<Fragment>
								<Link href="/user/dashboard">
									<a className="nav-link dropdown-item ">Dashboard</a>
								</Link>
							</Fragment>
						</li>
						<li>
							<Fragment>
								<Link href="/user/profile/update">
									<a className="nav-link dropdown-item ">profile</a>
								</Link>
							</Fragment>
						</li>
						<li>
							<Fragment>
								<a className="nav-link dropdown-item " onClick={logOut}>
									logout
								</a>
							</Fragment>
						</li>
					</ul>
				</div>
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
