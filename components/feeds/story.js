/** @format */
import Image from "next/image";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Story = ({ userName, userImage, storyImage, creatStory }) => {
	return (
		<>
			{!creatStory && (
				<Wrapper
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src={storyImage ? storyImage : userImage}
						alt='Saddam Image'
						layout='fill'
						objectFit='cover'
					/>
					<Avatar
						src={userImage ? userImage : storyImage}
						style={{ border: "1px solid #1877f2" }}
						className='absolute-top-ss'
					/>

					<div className='absolute-bottom-ss'>{userName}</div>
				</Wrapper>
			)}
			{creatStory && (
				<Wrapper style={{ background: "white" }}>
					<ImageContainer
						style={{
							position: "relative",
							cursor: "pointer",
						}}>
						<Image
							src={storyImage ? storyImage : userImage}
							alt='userImage'
							width={180}
							height={210}
							layout='responsive'
						/>
					</ImageContainer>
					<p
						style={{
							textAlign: "center",
							paddingTop: "1rem",
						}}>
						Create Story
					</p>
				</Wrapper>
			)}
		</>
	);
};

export default Story;

const Wrapper = styled.div`
	height: 14.375rem;
	width: 9.375rem;
	overflow: hidden;
	background: #d4d4ceff;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
	border-radius: 23px;
	margin: 1rem auto;
	transition: 0.3s;
	position: relative;

	@media (max-width: 768px) {
		display: none;
	}

	&:hover {
		border: 1px solid #1877f2;
		transform: translate3d(0, -5px, 0);
	}

	img {
		object-fit: cover;
		display: block;
	}

	.absolute-top-ss {
		position: absolute;
		top: 6px;
		left: 5px;
	}

	.absolute-bottom-ss {
		position: absolute;
		bottom: 23px;
		left: 24px;
		width: 100%;
		color: wheat;
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;

	img {
		object-fit: cover;
		display: block;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;
