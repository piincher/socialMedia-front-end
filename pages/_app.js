import React from 'react';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Nav from '../components/Nav';
import { UserProvider } from '../context';
function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<Head>
				<link rel="stylesheet" href="/css/styles.css" />
			</Head>
			<Nav />
			<ToastContainer position="top-center" />
			<Component {...pageProps} />;
		</UserProvider>
	);
}

export default MyApp;
