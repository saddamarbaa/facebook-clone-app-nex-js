/** @format */

import Head from "next/head";
import db from "../config/firebase";
import HomePageComponent from "../components/homePage/homePage";
import { fragment } from "react";

const HomePage = (props) => {
	return (
		<fragment>
			<Head>
				<title>Facebook Clone app</title>
				<meta
					name='description'
					content='Facebook Clone build with React + Next Js.'
				/>
			</Head>

			<HomePageComponent />
		</fragment>
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
