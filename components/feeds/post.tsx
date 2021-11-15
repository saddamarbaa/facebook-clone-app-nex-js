/** @format */

import styled from "styled-components";
import { Avatar, Card, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Image from "next/image";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import React from "react";

import { getRandomIntNumberBetween } from "../../lib/api-util";

type PostType = {
	userName?: string;
	userImage?: string;
	postImage?: string;
	postContent?: string;
	postHeading?: string;
	isVideo?: string;
	videoSrc?: string;
	constantDate?: string;
	height?: string;
};

interface ImageProps {
	height?: string;
}

const Post: React.FunctionComponent<PostType> = React.forwardRef(
	(props, ref) => {
		const {
			userName,
			userImage,
			postImage,
			postContent,
			postHeading,
			isVideo,
			videoSrc,
			constantDate,
			height,
		} = props;

		return (
			<Wrapper>
				<CustomCard>
					<UserContainer>
						<div className='user-heading-s'>
							<IconButton style={{ marginLeft: "-1rem" }}>
								<Avatar
									src={userImage ? userImage : "/images/tem-img.png"}
								/>
							</IconButton>

							<div className='user-head'>
								<h3>{userName}</h3>
								<p>{constantDate ? constantDate : "2h"}</p>
							</div>
						</div>
						<div>
							<MoreHorizIcon />
						</div>
					</UserContainer>
					<PostContainer>
						<h3>{postHeading}</h3>
						<p>{postContent}</p>
					</PostContainer>

					{postImage && (
						<ImageContainer
							height={height}
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src={postImage}
								alt='Post Image'
								layout='fill'
								objectFit='cover'
							/>
						</ImageContainer>
					)}

					{isVideo && (
						<iframe
							style={{ marginTop: " 1rem" }}
							width='100%'
							height='300'
							src={videoSrc}
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
					)}

					<PostReaction>
						<div className='top-div'>
							<div className='lef'>
								<ThumbUpIcon style={{ color: "#3B96E9" }} />
								<SentimentVerySatisfiedIcon
									style={{ color: "#FBCE59" }}
								/>
								<FavoriteIcon
									style={{ color: "#EE3251", marginRight: "10px" }}
								/>
								{getRandomIntNumberBetween(50, 230)}
							</div>
							<div className='right'>
								{getRandomIntNumberBetween(5, 30)}
								<span style={{ marginLeft: "10px" }}>Comments</span>
							</div>
						</div>
						<div className='bottom-div'>
							<div className='bottom-div-option'>
								<div className='bottom-div-icon-div'>
									<ThumbUpIcon style={{ marginRight: "10px" }} />

									<span> Like </span>
								</div>
							</div>

							<div className='bottom-div-option'>
								<div className='bottom-div-icon-div'>
									<ChatBubbleOutlineIcon
										style={{ marginRight: "10px" }}
									/>
									<span> Comment </span>
								</div>
							</div>

							<div className='bottom-div-option'>
								<div className='bottom-div-icon-div'>
									<ShareIcon style={{ marginRight: "10px" }} />
									<span> Share </span>
								</div>
							</div>
						</div>
					</PostReaction>
				</CustomCard>
			</Wrapper>
		);
	},
);

// To fix error(Component definition is missing display/name-react)
Post.displayName = "Post";

export default Post;

const Wrapper = styled.div``;

const CustomCard = styled(Card)`
	margin: 1rem auto;
	width: 34rem;
	padding: 1rem;
	overflow: hidden;
	background: white;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);

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
`;

const UserContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.2rem;

	.user-heading-s {
		display: flex;
		align-items: center;

		.user-head {
			margin-top: 4px;

			h3 {
				font-size: 1rem;
				margin-bottom: 4px;
			}

			p {
				font-size: 0.9rem;
			}
		}
	}
`;

const PostContainer = styled.div`
	margin-top: 1rem;

	h3 {
		margin: 0.5rem;
		font-size: 1.1rem;
	}
	p {
		line-height: var(--line-height);
	}
`;

const ImageContainer = styled.div<ImageProps>`
	width: 100%;
	height: ${(props) => (props?.height ? props?.height : "15rem")};
	margin-top: 1rem;

	img {
		display: block;
	}
`;

const PostReaction = styled.div`
	.top-div {
		padding: 1rem 0;
		margin-bottom: 0.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ced0d4;
		cursor: pointer;

		.lef {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.bottom-div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bottom-div-option {
		transition: 0.3s;
		padding: 0.8rem 2rem;
		cursor: pointer;
		transition: 0.3s;

		div {
			display: flex;
			align-items: center;

			span {
				@media (max-width: 42.375rem) {
					display: none;
				}
			}
		}

		&:hover {
			background: #f0f2f5;
			border-radius: 2px;
		}
	}
`;
