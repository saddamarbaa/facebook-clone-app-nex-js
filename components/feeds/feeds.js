/** @format */
import styled from "styled-components";
import AddPost from "./addPost";
import firebase from "firebase";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { useAuthState } from "react-firebase-hooks/auth";
import FlipMove from "react-flip-move";
import { useRef } from "react";
import { auth } from "../../config/firebase";
import { Card } from "@material-ui/core";
import { Avatar, IconButton } from "@material-ui/core";

const Feeds = (props) => {
	const messageRef = useRef(null);
	const autoScrollToBottomRef = useRef(null);
	const [user] = useAuthState(auth);

	return (
		<FeedWrapper>
			<AddPost />

			<FeedsChatBody>
				<FlipMove></FlipMove>

				{/* Empty div for auto scroll */}
				<ScrollToBottom
					ref={autoScrollToBottomRef}
					style={{ ScrollToBottom: "100px" }}
					className='auto-scroll'></ScrollToBottom>
			</FeedsChatBody>
		</FeedWrapper>
	);
};

export default Feeds;

const FeedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	padding-bottom: 2rem;
	min-width: 34.375rem;
	margin-right: 1.2rem;
	margin-left: 1.2rem;

	@media (max-width: 42.375rem) {
		width: 100vw;
		min-width: 300px;
		padding: 0 1rem;
	}
`;

const CustomCard = styled(Card)`
	margin: 1rem 0;
	width: 500px;
	padding: 1rem;
`;

const FeedsChatBody = styled.div``;

// empty div for auto scroll
const ScrollToBottom = styled.div`
	padding-bottom: 200px;
`;
