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

import StaticPosts from "./staticPosts";
import Stories from "./stories";
import ModalOverlay from "./modalOverlay";

import { useDispatch, useSelector } from "react-redux";
import { selectSendPost } from "../../features/sendPost/sendPostSlice";

const Feeds = (props) => {
	const dispatch = useDispatch();
	const showCompose = useSelector(selectSendPost);

	const [user] = useAuthState(auth);
	const messageRef = useRef(null);
	const autoScrollToBottomRef = useRef(null);

	return (
		<FeedWrapper>
			{showCompose && <ModalOverlay />}

			<Stories />
			<AddPost />
			<StaticPosts />
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
