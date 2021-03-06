/** @format */

import styled from "styled-components";
import Image from "next/image";
import { auth, provider } from "../../config/firebase";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import LogInScreen from "../login-page/login";

type UserSubmitForm = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
	acceptTerms: boolean;
};

const SignUpPageComponent: React.FC = () => {
	const autoScrollToBottomRef = useRef<HTMLDivElement>(null);
	const [logIn, setLogIn] = useState<boolean>(false);
	const router = useRouter();

	const validationSchema = Yup.object().shape({
		firstName: Yup.string()
			.required("First name is required")
			.min(3, "Must be at least 3 characters")
			.max(20, "First name must not exceed 20 characters"),
		lastName: Yup.string()
			.required("Last name is required")
			.min(3, "Must be at least 3 characters")
			.max(20, "Last name must not exceed 20 characters"),
		email: Yup.string()
			.required("Email is required")
			.email("Email is invalid"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters")
			.max(40, "Password must not exceed 40 characters"),
		confirmPassword: Yup.string()
			.required("Confirm Password is required")
			.oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
		acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<UserSubmitForm>({
		resolver: yupResolver(validationSchema),
	});

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		const redirectToLogin = () => {
			if (logIn) {
				return <LogInScreen />;
			}
		};

		redirectToLogin();
	}, [setLogIn]);

	if (logIn) {
		return <LogInScreen />;
	}

	const onSubmit = (data: UserSubmitForm) => {
		// console.log(JSON.stringify(data, null, 2));

		auth
			.createUserWithEmailAndPassword(data.email, data.password)
			.then((registeredUser) => {
				registeredUser?.user?.updateProfile({
					displayName: data.firstName,
					photoURL: "/images/tem-img.png",
				});

				router.push("/");
			})
			.catch((error) => {
				// An error happened.
				// const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	const signInWithGoogleHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
				router.push("/");
			})
			.catch((error) => {
				// An error happened.
				// console.log(error);
			});
	};

	return (
		<LogInPageComponentWrapper>
			<Container>
				<ImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/images/logo-2.svg'
						alt='FaceBook Logo'
						layout='fill'
						objectFit='cover'
					/>
				</ImageContainer>
				<ContactForm>
					<section>
						<div className='title'>
							<h1>Create a new account</h1>
							<p>its quick and easy.</p>
						</div>

						<form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
							<div className='flx-content'>
								<div className='control'>
									{errors.firstName && (
										<p className='error'>
											{errors.firstName?.message}
										</p>
									)}
									<input
										id='firstName'
										className={` ${
											errors.firstName
												? "is-invalid"
												: "input custom-input"
										}`}
										placeholder={errors.firstName ? "" : "First name"}
										{...register("firstName")}
									/>
								</div>

								<div className='control'>
									{errors.lastName && (
										<p className='error'>
											{errors.lastName?.message}
										</p>
									)}
									<input
										id='lastName'
										{...register("lastName")}
										placeholder={errors.lastName ? "" : "Surname"}
										className={` ${
											errors.lastName
												? "is-invalid"
												: "input custom-input"
										}`}
									/>
								</div>
							</div>

							<div className='control'>
								{errors.email && (
									<p className='error'>{errors.email?.message} </p>
								)}
								<input
									type='text'
									id='email'
									className={` ${
										errors.email ? "is-invalid" : "input custom-input"
									}`}
									{...register("email")}
									placeholder={errors.email ? "" : "Email"}
								/>
							</div>

							<div className='control'>
								<p className='error'>{errors.password?.message} </p>
								<input
									type='password'
									id='password'
									className={` ${
										errors.password ? "is-invalid" : "custom-input"
									}`}
									{...register("password")}
									placeholder={errors.password ? "" : "New Password"}
								/>
							</div>

							<div className='control'>
								<p className='error'>
									{errors.confirmPassword?.message}{" "}
								</p>
								<input
									type='password'
									id='confirmPassword'
									className={` ${
										errors.confirmPassword
											? "is-invalid"
											: "custom-input"
									}`}
									{...register("confirmPassword")}
									placeholder={
										errors.confirmPassword ? "" : "Confirm Password"
									}
								/>
							</div>

							<div
								style={{
									color: "gray",
									marginTop: "6px",
									fontSize: "0.9rem",
								}}>
								Date of birth ?
							</div>
							<UserDateOfBirthContainer>
								<div className='month-container select'>
									<select id='Month' className='select-css-month'>
										<option selected disabled value=''>
											Month
										</option>
										<option>January</option>
										<option>February</option>
										<option>March</option>
										<option>April</option>
										<option>May</option>
										<option>June</option>
										<option>July</option>
										<option>August</option>
										<option>September</option>
										<option>October</option>
										<option>November</option>
										<option>December</option>
									</select>
								</div>

								<div className='day-container select'>
									<select id='day' className='select-css'>
										<option selected disabled value=''>
											Day
										</option>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8</option>
										<option>9</option>
										<option>10</option>
										<option>11</option>
										<option>12</option>
										<option>13</option>
										<option>14</option>
										<option>15</option>
										<option>16</option>
										<option>17</option>
										<option>18</option>
										<option>19</option>
										<option>20</option>
										<option>21</option>
										<option>22</option>
										<option>23</option>
										<option>24</option>
										<option>25</option>
										<option>26</option>
										<option>27</option>
										<option>28</option>
										<option>29</option>
										<option>30</option>
										<option>31</option>
									</select>
								</div>

								<div className='year-container select'>
									<select id='year' className='select-css'>
										<option selected disabled value=''>
											Year
										</option>
										<option>2021</option>
										<option>2020</option>
										<option>2019</option>
										<option>2018</option>
										<option>2017</option>
										<option>2016</option>
										<option>2015</option>
										<option>2014</option>
										<option>2013</option>
										<option>2012</option>
										<option>2011</option>
										<option>2010</option>
										<option>2009</option>
										<option>2008</option>
										<option>2007</option>
										<option>2006</option>
										<option>2005</option>
										<option>2004</option>
										<option>2003</option>
										<option>2002</option>
										<option>2001</option>
										<option>2000</option>
										<option>1999</option>
										<option>1998</option>
										<option>1997</option>
										<option>1996</option>
										<option>1995</option>
										<option>1994</option>
										<option>1993</option>
										<option>1992</option>
										<option>1991</option>
										<option>1990</option>
										<option>1989</option>
										<option>1988</option>
										<option>1987</option>
										<option>1986</option>
										<option>1985</option>
										<option>1984</option>
										<option>1983</option>
										<option>1982</option>
										<option>1981</option>
										<option>1980</option>
										<option>1979</option>
										<option>1978</option>
										<option>1977</option>
										<option>1976</option>
										<option>1975</option>
										<option>1974</option>
										<option>1973</option>
										<option>1972</option>
										<option>1971</option>
										<option>1970</option>
										<option>1969</option>
										<option>1968</option>
										<option>1967</option>
										<option>1966</option>
										<option>1965</option>
										<option>1964</option>
										<option>1963</option>
										<option>1962</option>
										<option>1961</option>
										<option>1960</option>
										<option>1959</option>
										<option>1958</option>
										<option>1957</option>
										<option>1956</option>
										<option>1955</option>
										<option>1954</option>
										<option>1953</option>
										<option>1952</option>
										<option>1951</option>
										<option>1950</option>
										<option>1949</option>
										<option>1948</option>
										<option>1947</option>
										<option>1946</option>
										<option>1945</option>
										<option>1944</option>
										<option>1943</option>
										<option>1942</option>
										<option>1941</option>
										<option>1940</option>
										<option>1939</option>
										<option>1938</option>
										<option>1937</option>
										<option>1936</option>
										<option>1935</option>
										<option>1934</option>
										<option>1933</option>
										<option>1932</option>
										<option>1931</option>
										<option>1930</option>
										<option>1929</option>
										<option>1928</option>
										<option>1927</option>
										<option>1926</option>
										<option>1925</option>
										<option>1924</option>
										<option>1923</option>
										<option>1922</option>
										<option>1921</option>
										<option>1920</option>
										<option>1919</option>
										<option>1918</option>
										<option>1917</option>
										<option>1916</option>
										<option>1915</option>
										<option>1914</option>
										<option>1913</option>
										<option>1912</option>
										<option>1911</option>
										<option>1910</option>
										<option>1909</option>
										<option>1908</option>
										<option>1907</option>
										<option>1906</option>
										<option>1905</option>
										<option>1904</option>
										<option>1903</option>
										<option>1902</option>
										<option>1901</option>
									</select>
								</div>
							</UserDateOfBirthContainer>

							<div
								style={{
									color: "gray",
									fontSize: "0.9rem",
									marginTop: "1rem",
								}}>
								Gender ?
							</div>

							<div className='flx-content'>
								<div
									className='control'
									style={{ position: "relative" }}>
									<input
										type='text'
										id='Female'
										placeholder='Female'
									/>

									<input
										type='radio'
										id='Female'
										placeholder='Female'
										style={{
											position: "absolute",
											right: "10px",
											fontSize: "0.9rem",
											width: "1rem",
										}}
									/>
								</div>

								<div
									className='control'
									style={{ position: "relative" }}>
									<input type='text' id='Male' placeholder='Male' />

									<input
										type='radio'
										id='Male'
										placeholder='Male'
										style={{
											position: "absolute",
											right: "10px",
											fontSize: "0.9rem",
											width: "1rem",
										}}
									/>
								</div>

								<div
									className='control'
									style={{ position: "relative" }}>
									<input
										type='text'
										id='Custom'
										placeholder='Custom'
									/>

									<input
										type='radio'
										id='Custom'
										placeholder='Custom'
										style={{
											position: "absolute",
											right: "10px",
											fontSize: "0.9rem",
											width: "1rem",
										}}
									/>
								</div>
							</div>

							<p className='error' style={{ marginBottom: "4px" }}>
								{errors.acceptTerms?.message}
							</p>
							<p>
								<input
									id='checkbox'
									type='checkbox'
									{...register("acceptTerms")}
									style={{ marginRight: "5px" }}
								/>
								By clicking Sign Up, you agree to the facebook
								<span style={{ color: "#42b72a" }}> (Saddam) </span>
								<span>User Agreement, </span>
								<span>Privacy Policy, </span>
								and <span> Cookie Policy.</span>. You may receive SMS
								notifications from me and can opt out at any time.
							</p>

							<div className='actions'>
								<CustomButton>Sign Up</CustomButton>
							</div>
						</form>
						<div className='actions' style={{ padding: "0 2rem" }}>
							<RestButton onClick={() => reset()}>Reset?</RestButton>
						</div>
						<div className='actions ' style={{ padding: "0 2rem" }}>
							<CustomButtonWithGoogle onClick={signInWithGoogleHandler}>
								<Image
									onClick={signInWithGoogleHandler}
									src='/images/google.png'
									alt='Google Logo'
									width={25}
									height={25}
									objectFit='contain'
								/>
								<span
									style={{ marginLeft: "0.5rem" }}
									onClick={signInWithGoogleHandler}>
									Sign with Google
								</span>
							</CustomButtonWithGoogle>
						</div>
						<p className='option'>Or</p>
						<div
							className='actions'
							style={{ padding: "0 2rem" }}
							onClick={() => setLogIn(true)}>
							<NewAccountButton onClick={() => setLogIn(true)}>
								Already have an account?
							</NewAccountButton>
						</div>
					</section>
				</ContactForm>

				<div className='copyRight link'>
					<span> Conditions of Use</span> <span> Privacy Notice </span>
					<span> Help </span>
				</div>
				<div className='copyRight'>
					<span>
						&copy; 2004-2021, Facebook.com, Inc. or its affiliates
					</span>
				</div>
			</Container>
		</LogInPageComponentWrapper>
	);
};

export default SignUpPageComponent;

const LogInPageComponentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
	max-width: 90.75rem;
	overflow: hidden;
	margin: 0 auto;
	padding-bottom: 3rem;

	.error {
		width: 100%;
		color: red;
		color: #ff9700;
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 5px;
	}
`;

const Container = styled.div`
	margin: 0 auto;
	width: 97%;
	margin-top: 1rem;

	@media (min-width: 578px) {
		max-width: 31.25rem;
		min-width: 31.25rem;
	}

	div.copyRight {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 5px;
	}
	div.copyRight.link span {
		color: #0066c0;
		transition: 0.4s;
		cursor: pointer;
		:hover {
			text-decoration: underline;
		}
	}
	div.copyRight span {
		font-size: 13.5px !important;
		line-height: 1.5 !important ;
		margin: 8px;
		margin-bottom: 0;
		color: #555;
	}
`;

const ImageContainer = styled.div`
	flex: 1;
	width: 15rem;
	min-width: 15rem;
	height: 5.25rem;
	margin: 0 auto;
	overflow: hidden;
	img {
		display: block;
	}
	@media (max-width: 568px) {
		width: 12rem;
		min-width: 12rem;
		height: 4.25rem;
	}
`;

const ContactForm = styled.div`
	min-height: 25rem;
	width: 100%;
	border-radius: 6px;
	background-color: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	color: #1c1e21;

	.title {
		padding: 0.7rem 0;
		border-bottom: 1px solid #dadde1;
		text-align: center;

		p {
			color: gray;
			font-size: 15px;
		}
	}

	h1 {
		color: #1c1e21;
		font-size: 1.5rem;
		margin-bottom: 8px;

		@media (max-width: 578px) {
			font-size: 1rem;
		}
	}
	section {
		padding-top: 0rem;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
	}
	form {
		padding: 2rem;
		padding-bottom: 0;
		.flx-content {
			@media (min-width: 578px) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 1.3rem;
			}
		}

		p {
			font-size: 13px !important;
			line-height: 1.5 !important ;
			color: gray;
			span {
				color: #0066c0;
				transition: 0.4s;
				cursor: pointer;
				:hover {
					text-decoration: underline;
					color: #0a66c2;
				}
			}
		}
	}

	.control {
		margin-bottom: 1.4rem;
		color: #1c1e21;
	}

	.control input {
		display: inline-flex;
		font-size: 1rem;
		height: 2.7rem;
		justify-content: flex-start;
		line-height: normal;
		padding: 1rem;
		align-items: center;
		background-color: #fff;
		width: 100%;
		border-radius: 4px;
		box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
		border: 1px solid #dadde1;
		border-top-color: #dadde1;
		transition: 0.4s;
		:hover {
			outline: none;
			border: 1px solid rgb(220, 227, 232);
		}
		:focus,
		:active {
			outline: 0 !important;
			border-color: #0a66c2;
			box-shadow: 0 0 3px 2px rgb(14 118 168/ 50%);
		}
	}

	.control input.is-invalid,
	.control input.touched.invalid {
		border-color: red;
		background: #ffc2c2;
		box-shadow: none;
		transition: 0.3s;
	}

	.actions {
		margin-top: 1.5rem;
	}

	p.option {
		border-bottom: 1px solid #dadde1;
		text-align: center;
		font-weight: bold;
		margin-top: 1.813rem !important;
		font-size: 12.5px !important;
		line-height: 1.5 !important ;
	}
`;

const CustomButton = styled.button`
	display: block;
	font: inherit;
	cursor: pointer;
	font-weight: bold;
	background-color: var(--color-primary);
	border: 1px solid var(--color-primary);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	transition: 3s;
	color: white;
	font-size: 1rem;
	display: block;
	height: 2.5rem;
	width: 100%;
	margin: 0 auto;

	&:hover {
		background: rgba(14, 118, 168, 0.8);
	}
`;

const CustomButtonWithGoogle = styled(CustomButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1.5rem;
	border: 1px solid #0a66c2;
	color: #0066c0;
	background: white;
	border-radius: 34px;
	:hover {
		border: 2px solid #0a66c2;
		background: rgba(14, 118, 168, 0.2);
	}
`;

const NewAccountButton = styled(CustomButton)`
	font-size: 1rem;
	background: #42b72a;
	border-color: #42b72a;

	:hover {
		border: 2px #256818;
		background: #256818;
	}

	@media (min-width: 578px) {
		width: 15.625rem;
	}
`;

const UserDateOfBirthContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.3rem;

	.month-container,
	.day-container,
	.year-container {
		flex: 1;
		display: flex;
	}

	/* Reset Select */
	.select select {
		flex: 1;
		position: relative;
		overflow: hidden;
		transition: 0.3s;
		border-radius: 0.25em;
		color: gray;
		height: 2.4rem;
		border-radius: 4px;
		box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
		border: 1px solid #dadde1;
		border-top-color: #dadde1;
		width: 100%;
		padding: 0.4rem 0;
		background-color: #fff;

		:hover {
			outline: none;
			border: 1px solid rgb(220, 227, 232);
		}
		:focus,
		:active {
			outline: 0 !important;
			border-color: #0a66c2;
			box-shadow: 0 0 3px 2px rgb(14 118 168/ 50%);
		}
	}
`;

const RestButton = styled(CustomButton)`
	margin-top: 1.5rem;
	border-color: #3b0062;
	background: rgba(59, 0, 98, 0.1);
	color: #3b0062;
	transition: 0.2s;

	:hover {
		background: rgba(59, 0, 98, 0.2);
	}
`;
