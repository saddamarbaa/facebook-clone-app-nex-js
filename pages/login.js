/** @format */

import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import LogIn from "../components/login/login";

const LogInScreen = () => {
	return (
		<Fragment>
			<Head>
				<title>LogIn to messenger</title>
			</Head>
			<meta name='description' content='	Sign In With Google.' />
			<LogIn />
		</Fragment>
	);
};

export default LogInScreen;
