/** @format */
import styled from "styled-components";
import AddPost from "./addPost";
import firebase from "firebase";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { useAuthState } from "react-firebase-hooks/auth";
import FlipMove from "react-flip-move";
import { useRef } from "react";
import db, { auth } from "../../config/firebase";
import { Card } from "@material-ui/core";
import moment from "moment";

import StaticPosts from "./staticPosts";
import Stories from "./stories";
import ModalOverlay from "./modalOverlay";

import { useDispatch, useSelector } from "react-redux";
import { selectSendPost } from "../../features/sendPost/sendPostSlice";
import Post from "./post";

const Feeds = (props) => {
	const dispatch = useDispatch();
	const showCompose = useSelector(selectSendPost);

	const [user] = useAuthState(auth);
	const messageRef = useRef(null);
	const autoScrollToBottomRef = useRef(null);
	const [post, setPost] = useState([]);

	useEffect(() => {
		const unsubscribe = db
			.collection("posts")
			.orderBy("timestamp", "desc")
			.limit(1)
			.onSnapshot((snapshot) => {
				setPost(
					snapshot.docs.map((doc) => {
						return {
							data: doc?.data(),
							id: doc?.id,
						};
					}),
				);
			});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<FeedWrapper>
			{showCompose && <ModalOverlay />}

			<Stories />
			<AddPost />
			{/* Post */}
			<FlipMove>
				{post?.map(({ id, data }) => {
					return (
						<Post
							key={id}
							constantDate={moment(
								data?.timestamp?.toDate()?.getTime(),
							).format("LT")}
							userName={data?.userName}
							userImage={data?.userImage}
							postImage={data?.postImage}
							postHeading={data?.postHeading}
							postContent={data?.postContent}
						/>
					);
				})}
			</FlipMove>
			<StaticPosts />
			<FeedsChatBody>
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
