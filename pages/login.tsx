/** @format */

import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import LogInComponent from "../components/login-page/login";
import type { NextPage } from "next";

const LogInScreen: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>LogIn to Facebook</title>
			</Head>
			<meta name='description' content='LogIn to Facebook' />

			<LogInComponent />
		</Fragment>
	);
};

export default LogInScreen;
