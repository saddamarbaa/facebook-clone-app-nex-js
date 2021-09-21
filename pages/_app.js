/** @format */

import Head from "next/head";
import Router from "next/router";
import { store } from "../app/store";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import "../styles/globals.css";
import firebase from "firebase";
import ProgressBar from "@badrap/bar-of-progress";
import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth } from "../config/firebase";
import LogInScreen from "./login";
import Loading from "../components/ui/loading";

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 3,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: "#006aff",

	// Class name used for the progress bar element.
	className: "bar-of-progress",

	// How many milliseconds to wait before the progress bar
	// animation starts after calling .start().
	delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return <Loading />;
	}

	if (!user) {
		return <LogInScreen />;
	}

	return (
		<React.Fragment>
			<Provider store={store}>
				<Head>
					<title>Facebook Clone app</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1'
					/>
					<meta name='author' content='Saddam Arbaa' />
					<meta
						name='description'
						content='Facebook Clone build with React + Next Js.'
					/>
				</Head>

				<Component {...pageProps} />
			</Provider>
		</React.Fragment>
	);
}

export default MyApp;
