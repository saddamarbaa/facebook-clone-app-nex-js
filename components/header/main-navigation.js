/** @format */

import Link from "next/link";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import GroupWorkIcon from "@material-ui/icons/GroupWork";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";

import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { IconButton } from "@material-ui/core";
import { getRandomNumber } from "../../lib/api-util";

const MainNavigation = () => {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	const userSignedOutHandler = () => {
		// User is signed out(Remove the user from Firebase)
		if (user) {
			auth
				.signOut()
				.then(() => {
					// Sign-out successful.
				})
				.catch((error) => {
					// An error happened.
				});
			// dispatch(setLogOutState());
		}
	};

	const onClickHandler = () => {
		router.push("/");
	};

	return (
		<MainNavigationWrapper>
			<nav>
				<HeaderLetContainer>
					<IconButton>
						<Avatar
							onClick={userSignedOutHandler}
							src='/images/Facebook-logo.svg'
						/>
					</IconButton>

					<HeaderSearch>
						<SearchIcon />
						<input type='text' placeholder='Search Facebook' />
					</HeaderSearch>
				</HeaderLetContainer>
				<HeaderMiddleContainer>
					<div className='header-option home-Icon'>
						<HomeIcon
							className='MuiSvgIconCustom'
							style={{ color: "#1877F2" }}
						/>
					</div>
					<div className='header-option'>
						<div className='icon-div'>
							<VideoLibraryIcon className='MuiSvgIconCustom' />
							<div className='absolute-counter'>
								{getRandomNumber(7)}
							</div>
						</div>
					</div>
					<div className='header-option'>
						<div className='icon-div'>
							<AccountBalanceIcon className='MuiSvgIconCustom' />
							<div className='absolute-counter'>
								{getRandomNumber(9)}
							</div>
						</div>
					</div>
					<div className='header-option'>
						<GroupWorkIcon className='MuiSvgIconCustom' />
					</div>

					<div className='header-option'>
						<div className='icon-div'>
							<PictureInPictureIcon className='MuiSvgIconCustom' />
							<div className='absolute-counter'>
								{getRandomNumber(5)}
							</div>
						</div>
					</div>
				</HeaderMiddleContainer>

				<HeaderRightContainer>
					<div className='user'>
						<Avatar
							onClick={userSignedOutHandler}
							src={
								user?.photoURL
									? user?.photoURL
									: "https://lh3.googleusercontent.com/a/AATXAJxvNL0mo2ldUytJDKQLwdUu6Qagh5SbgZnChr5S=s96-c"
							}
						/>
						<span> User Name</span>
					</div>

					<IconButton>
						<div className='icon-rounded'>
							<AppsIcon className='icon' />
						</div>
					</IconButton>
					<IconButton>
						<div className='icon-rounded'>
							<VideocamIcon className='icon' />
						</div>
					</IconButton>

					<IconButton>
						<div className='icon-rounded  MuiSvgIconCustom'>
							<NotificationsActiveIcon className='icon' />
							<div className='absolute-counter'>
								{getRandomNumber(5)}
							</div>
						</div>
					</IconButton>

					<IconButton>
						<div className='icon-rounded'>
							<ArrowDropDownIcon className='icon' />
						</div>
					</IconButton>
				</HeaderRightContainer>
			</nav>
		</MainNavigationWrapper>
	);
};

export default MainNavigation;

const MainNavigationWrapper = styled.header`
	width: 100vw;
	position: sticky;
	display: flex;
	align-items: center;
	top: 0;
	z-index: 99999;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 0px 2px rgba(0, 0, 0, 0.2);
	padding-right: 2rem;

	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		padding-top: 0.3rem;
		overflow: hidden;
		@media (max-width: 768px) {
			padding-top: 1rem;
		}
	}
`;

const HeaderLetContainer = styled.div`
	display: flex;
	align-items: center;
	min-width: 1rem;
	flex: 0.3;
	position: relative;

	@media (max-width: 992px) {
		display: none;
	}
`;

const HeaderSearch = styled.div`
	flex: 1;
	margin: 0 1rem;
	display: flex;
	border: 1px solid rgba(220, 227, 232, 0.5);
	background-color: rgba(220, 227, 232, 0.5);
	color: gray;
	border-radius: 1.4rem;
	align-items: center;
	padding: 7px 8px;
	cursor: pointer;
	transition: 0.3s;
	&:hover,
	&:focus {
		border: 1px solid rgba(220, 227, 232);
		background-color: rgba(220, 227, 232);
	}

	input {
		display: flex;
		flex: 1;
		align-items: center;
		overflow: hidden;
		padding-left: 5px;
		border: none;
		outline: none;
		background: transparent;
		font-size: 0.97rem;
	}
`;

const HeaderMiddleContainer = styled.div`
	flex: 0.4;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 1rem;
	min-width: 31.25rem;

	@media (max-width: 991px) {
		flex: 1;
	}

	.header-option {
		transition: 0.3s;
		padding: 0.8rem 2rem;
		cursor: pointer;
		transition: 0.3s;

		.icon-div {
			position: relative;
			transition: 0.3s;

			.absolute-counter {
				position: absolute;
				top: -10px;
				left: 26px;
				background: red;
				color: white;
				width: 1.2rem;
				height: 1.2rem;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
			}
		}

		&:hover {
			background: #f0f2f5;
			border-bottom: 3px solid var(--color-primary);
			border-radius: 2px;
		}

		.MuiSvgIconCustom {
			font-size: 2rem;

			@media (max-width: 768px) {
				font-size: 1.8rem;
			}
		}
	}

	.header-option.home-Icon {
		border-bottom: 3px solid var(--color-primary);
	}
`;

const HeaderRightContainer = styled.div`
	flex: 0.3;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}

	.icon-rounded {
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		padding: 1.3rem;
		transition: 0.3s;
		background: var(--background-color);

		@media (max-width: 1200px) {
			display: none;
		}

		.icon {
			color: black;
		}

		&:hover {
			background: var(--color-gray);
		}
	}

	.user {
		display: flex;
		align-items: center;
		width: 100%;
		margin: 0 1rem;
		cursor: pointer;

		span {
			padding: 0 0.5rem;
			font-weight: bold;
			font-size: 0.9rem;
			@media (max-width: 1200px) {
				display: none;
			}
		}

		@media (max-width: 1200px) {
			justify-content: flex-end;
			margin-right: 0;
		}
	}

	.icon-rounded.MuiSvgIconCustom {
		position: relative;

		.absolute-counter {
			position: absolute;
			top: -8px;
			left: 29px;
			background: red;
			color: white;
			width: 1.5rem;
			height: 1.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
		}
	}
`;
