/** @format */
import styled from "styled-components";
import firebase from "firebase";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { useAuthState } from "react-firebase-hooks/auth";
import FlipMove from "react-flip-move";
import { useRef } from "react";
import db, { auth } from "../../config/firebase";
import { Card } from "@material-ui/core";
import moment from "moment";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectSendPost } from "../../features/sendPost/sendPostSlice";

import StaticPosts from "./staticPosts";
import Stories from "./stories";
import ModalOverlay from "./modalOverlay";
import Post from "./post";
import AddPost from "./addPost";

const Feeds: React.FunctionComponent = (props) => {
	const dispatch = useAppDispatch();
	const showCompose = useSelector(selectSendPost);

	const [user] = useAuthState(auth);
	const messageRef = useRef<HTMLInputElement>(null!);
	const autoScrollToBottomRef = useRef<HTMLDivElement>(null);
	const [post, setPost] = useState<any>([]);

	useEffect(() => {
		const unsubscribe = db
			.collection("posts")
			.orderBy("timestamp", "desc")
			.limit(2)
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
				{post?.map((props: any) => {
					return (
						<Post
							key={props?.id}
							constantDate={moment(
								props?.data?.timestamp?.toDate()?.getTime(),
							).format("LT")}
							userName={props?.data?.userName}
							userImage={props?.data?.userImage}
							postImage={props?.data?.postImage}
							postHeading={props?.data?.postHeading}
							postContent={props?.data?.postContent}
						/>
					);
				})}
			</FlipMove>
			<StaticPosts />
			<FeedsChatBody>
				{/* Empty div for auto scroll */}
				<ScrollToBottom
					ref={autoScrollToBottomRef}
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
