/** @format */
import styled from "styled-components";
import firebase from "firebase";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRef } from "react";
import { auth } from "../../config/firebase";
import { Button, Card } from "@material-ui/core";
import { Avatar, IconButton } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import { useDispatch, useSelector } from "react-redux";
import {
	setHideComposeState,
	setShowComposeState,
} from "../../features/sendPost/sendPostSlice";

import { friends } from "../../lib/api-util";

const AddPost = (props) => {
	const messageRef = useRef(null);
	const autoScrollToBottomRef = useRef(null);
	const [user] = useAuthState(auth);
	const dispatch = useDispatch();

	const closeCompose = () => {
		dispatch(setHideComposeState());
	};

	const showCompose = () => {
		dispatch(setShowComposeState());
	};

	return (
		<AddPostWrapper>
			<HeaderContainer>
				<div className='header-top'>
					<IconButton>
						<Avatar
							src={
								user?.photoURL
									? user?.photoURL
									: "https://lh3.googleusercontent.com/a/AATXAJxvNL0mo2ldUytJDKQLwdUu6Qagh5SbgZnChr5S=s96-c"
							}
						/>
					</IconButton>
					<HeaderSearch>
						<input
							type='text'
							placeholder='What`s is on your mind,  (user Name) ?'
							onClick={showCompose}
						/>
					</HeaderSearch>
				</div>
				<div className='header-bottom'>
					<div>
						<VideocamIcon
							style={{
								color: "#F02849",
								marginRight: "5px",
								fontSize: "2.5rem",
							}}
						/>
						<span>Live Video</span>
					</div>
					<div>
						<PhotoLibraryIcon
							style={{
								color: "#45BD62",
								marginRight: "5px",
								fontSize: "2rem",
							}}
						/>
						<span>Photo/Video</span>
					</div>

					<div>
						<SentimentVerySatisfiedIcon
							style={{
								color: "#F7B928",
								marginRight: "5px",
								fontSize: "2rem",
							}}
						/>
						<span>Feeling/Activity</span>
					</div>
				</div>
			</HeaderContainer>
			<CreateRoom>
				<Button className='button'>
					<VideoCallIcon
						style={{
							color: "#C364D0",
							marginRight: "5px",
							fontSize: "2rem",
						}}
					/>
					Create Room
				</Button>
				<div className='wrapper'>
					{friends &&
						friends?.map((friend, index) => {
							return (
								<div
									className={
										index === 3 || index === 5
											? "user icons hid-s "
											: "user icons "
									}
									key={index}>
									<Avatar src={friend?.image} />
									<FiberManualRecordIcon
										className='absolute-icon'
										style={{
											color:
												index === 3 || index === 5 || index === 6
													? "red"
													: "green",
										}}
									/>
								</div>
							);
						})}

					<div className='absolute-arrow'>
						<ArrowForwardIosRoundedIcon />
					</div>
				</div>
			</CreateRoom>
		</AddPostWrapper>
	);
};

export default AddPost;

const AddPostWrapper = styled.div``;

const CustomCard = styled(Card)`
	margin: 1rem auto;
	width: 34rem;
	padding: 1rem;
	overflow: hidden;

	@media (max-width: 42.375rem) {
		max-width: 90vw;
		min-width: 19rem;
		overflow: hidden;
	}
`;

const HeaderContainer = styled(CustomCard)`
	.header-top {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(220, 227, 232, 0.5);
		cursor: pointer;
		margin-bottom: 1rem;
	}

	.header-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		div {
			display: flex;
			align-items: center;
			cursor: pointer;
			transition: 0.3s;
			padding: 0.8rem 1rem;

			&:hover {
				background: #f0f2f5;
				border-radius: 2px;
			}
		}

		span {
			@media (max-width: 42.375rem) {
				display: none;
			}
		}
	}
`;

const HeaderSearch = styled.div`
	flex: 1;
	display: flex;
	border: 1px solid rgba(220, 227, 232, 0.5);
	background-color: rgba(220, 227, 232, 0.5);
	color: gray;
	border-radius: 1.4rem;
	align-items: center;
	padding: 8px;
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

		::placeholder,
		::-webkit-input-placeholder {
			font-size: 1rem;
		}
		:-ms-input-placeholder {
			font-size: 1rem;
		}
	}
`;

const CreateRoom = styled(CustomCard)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding-right: 0;
	background: white;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);

	@media (max-width: 61.938rem) {
		justify-content: center;
	}

	div.wrapper {
		display: flex;
		align-items: center;
		cursor: pointer;

		@media (max-width: 61.938rem) {
			justify-content: space-between;
			width: 100%;
		}
	}

	.user.icons {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
		cursor: pointer;
		margin-left: 0.5rem;

		.absolute-icon {
			position: absolute;
			color: green;
			left: 29px;
			top: 29px;
			font-size: 1rem;
		}

		@media (max-width: 61.938rem) {
			margin: 1rem;
		}
	}

	.user.icons.hid-s {
		@media (max-width: 41.375rem) {
			display: none;
		}
	}

	.button {
		transition: 0.3s;
		border-radius: 6px;
		color: var(--color-primary);
		padding: 0.5rem 1.5rem;
		text-align: center;
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
		border: 1px solid var(--color-primary);

		&:hover,
		&:active {
			border: 1px solid green;
		}

		@media (max-width: 61.938rem) {
			display: none;
		}
	}

	.absolute-arrow {
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 1rem;
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
		z-index: 100;
		background: white;
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);

		@media (max-width: 61.938rem) {
			display: none;
		}
	}
`;

// empty div for auto scroll
const ScrollToBottom = styled.div`
	padding-bottom: 200px;
`;
