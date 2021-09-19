/** @format */

import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import SignUpComponent from "../components/sign-up-page/sign-up";

const SignUpScreen = () => {
	return (
		<Fragment>
			<Head>
				<title>Sign up to Facebook</title>
			</Head>
			<meta name='description' content='Sign up to Facebook' />

			<SignUpComponent />
		</Fragment>
	);
};

export default SignUpScreen;
