/** @format */

import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import SignUpComponent from "../components/sign-up-page/sign-up";
import type { NextPage } from "next";

const SignUpScreen: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Sign up to Facebook</title>
			</Head>
			<meta name='description' content='Sign up to  Facebook' />

			<SignUpComponent />
		</Fragment>
	);
};

export default SignUpScreen;
