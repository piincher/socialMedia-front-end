import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav';
function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Nav />
			<Component {...pageProps} />;
		</React.Fragment>
	);
}

export default MyApp;
