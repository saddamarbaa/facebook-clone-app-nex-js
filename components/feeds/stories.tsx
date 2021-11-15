/** @format */

import styled from "styled-components";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

import Story from "./story";

const Stories: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<div className='nextButton'>
				<ArrowForwardIosRoundedIcon />
			</div>

			<div className='createStoryButton'>
				<AddCircleIcon
					style={{
						fontSize: "2.5rem",
						textAlign: "center",
						color: "#1877f2",
						boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
						// zIndex: "100",
					}}
				/>
			</div>

			<Story
				userName='Saddam Arbaa'
				userImage='/images/saddam2.jpg'
				storyImage='/friends/saddam.jpg'
			/>
			<Story
				userName='Susan Wojcicki'
				userImage='/friends/susan-2.jpg'
				storyImage='/friends/susan.webp'
			/>

			<Story
				userName='Mark Zuckerberg'
				userImage='/friends/mark.jpg'
				storyImage='/friends/mark2.jpg'
			/>

			<Story
				userName='Sundar Pichai'
				userImage='/friends/sudar.png'
				storyImage='/friends/Sundar_pichai.png.webp'
			/>
		</Wrapper>
	);
};

export default Stories;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	position: relative;

	@media (max-width: 992px) {
		display: none;
	}

	.createStoryButton,
	.nextButton {
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: -1.5rem;
		width: 3rem;
		height: 3rem;
		cursor: pointer;
		z-index: 100;
		background: white;
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
	}

	.createStoryButton {
		left: 0;
		width: 2.5rem;
		height: 2.5rem;
		left: 3.375rem;
		width: 2.5rem;
		height: 2.5rem;
		bottom: 4.125rem;
		display: none;
	}
`;
