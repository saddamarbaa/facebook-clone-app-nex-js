/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth } from "../config/firebase";

import LogInScreen from "./login";
import HomePageComponent from "../components/homePage/homePage";

const HomePage: NextPage = () => {
	const [user, loading] = useAuthState(auth);

	if (!user) {
		return <LogInScreen />;
	}

	return (
		<React.Fragment>
			<Head>
				<title>Facebook Clone app</title>
				<meta
					name='description'
					content='Facebook Clone build with React + Next Js.'
				/>
			</Head>

			<HomePageComponent />
		</React.Fragment>
	);
};

// export async function getServerSideProps(context) {
// 	const verifiedUsers = await getVerifiedUsersInDb();
// 	const unVerifiedUsers = await getUnVerifiedUsersInDb();

// 	// Pass data to the page via props
// 	return {
// 		props: {
// 			verifiedUsers: verifiedUsers,
// 			unVerifiedUsers: unVerifiedUsers,
// 		},
// 	};
// }

export default HomePage;
