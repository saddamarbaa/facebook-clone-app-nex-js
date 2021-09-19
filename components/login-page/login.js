/** @format */

import styled from "styled-components";
import Image from "next/image";

const LogInPageComponent = (props) => {
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
						<h1>Log in to Facebook</h1>
						<form>
							<div className='control'>
								<label htmlFor='email'> Email</label>
								<input
									type='email'
									id='email'
									required
									placeholder=''
								/>
							</div>

							<div className='control'>
								<label htmlFor='password'>
									Password (6 or more characters)
								</label>
								<input
									type='password'
									id='password'
									required
									placeholder=''
								/>
							</div>

							<div className='actions'>
								<CustomButton>Log In</CustomButton>
							</div>
						</form>
						<div className='actions'>
							<CustomButtonWithGoogle>
								<Image
									src='/images/google.png'
									alt='Google Logo'
									width={25}
									height={25}
									objectFit='contain'
								/>
								<span style={{ marginLeft: "0.5rem" }}>
									Join with Google
								</span>
							</CustomButtonWithGoogle>
						</div>

						<p className='option'>Or</p>

						<div className='actions'>
							<NewAccountButton>Create New Account</NewAccountButton>
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

export default LogInPageComponent;

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
`;

const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	padding: 1rem;

	@media (min-width: 578px) {
		max-width: 26rem;
		min-width: 26rem;
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
	padding: 2rem;
	padding-top: 1.7rem;
	color: #1c1e21;
	margin-bottom: 2rem;

	h1 {
		margin-bottom: 1.5rem;
		text-align: center;
		color: #1c1e21;
		font-size: 1.5rem;
		@media (max-width: 578px) {
			font-size: 1rem;
		}
	}
	.control {
		margin-bottom: 2rem;
		color: #1c1e21;
	}
	.control label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
		font-size: 14px;
		font-weight: bold;
		color: #222;
	}

	.control input {
		display: inline-flex;
		font-size: 1rem;
		height: 3.1rem;
		justify-content: flex-start;
		line-height: normal;
		padding: 1rem;
		align-items: center;
		background-color: #fff;
		width: 100%;
		border-radius: 4px;
		box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
		border: 1px solid #a6a6a6;
		border-top-color: #949494;
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
	.actions {
		margin-top: 1.5rem;
	}

	p.option {
		border-bottom: 1px solid #a6a6a6;
		text-align: center;
		font-weight: bold;
		margin-top: 1.813rem !important;
		font-size: 12.5px !important;
		line-height: 1.5 !important ;
	}
`;

const CustomButton = styled.button`
	display: block;
	width: 100%;
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
	height: 3rem;

	&:hover {
		background: var(--color-primary-10);
		border-color: var(--color-primary-10);
		background: #0a66c2;
		background: rgba(14, 118, 168, 0.8);
	}
`;

const CustomButtonWithGoogle = styled(CustomButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1.5rem;
	font-size: 0.9rem;
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
	margin: 0 auto;
	background: #42b72a;
	border-color: #42b72a;

	:hover {
		border: 2px #256818;
		background: #256818;
	}

	@media (min-width: 578px) {
		width: 12.125rem;
	}
`;
