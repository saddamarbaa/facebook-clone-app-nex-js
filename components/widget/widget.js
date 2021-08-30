/** @format */
import styled from "styled-components";

const Widget = () => {
	return (
		<WidgetWrapper>
			<WidgetVideo>
				<h3>Recommended React & Next js videos</h3>
			</WidgetVideo>

			<WidgetVideo>
				<h4>Next.js for Beginners - Full Course </h4>
				<iframe
					width='100%'
					height='300'
					src='https://www.youtube.com/embed/1WmNXEVia8I?autoplay=1&mute=1'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</WidgetVideo>
			<WidgetVideo>
				<h4>Next Js conferences 2021 by Vercel</h4>
				<iframe
					width='100%'
					height='300'
					src='https://www.youtube.com/embed/ze8ycxc1UzE'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</WidgetVideo>

			<WidgetVideo>
				<h4>Harvard University CS50, JavaScript</h4>
				<iframe
					width='100%'
					height='315'
					src='https://www.youtube.com/embed/5g0x2xv3aHU?autoplay=1&mute=1'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</WidgetVideo>

			<WidgetVideo>
				<h4>Full React Course Learn Fundamentals</h4>
				<iframe
					width='100%'
					height='300'
					src='https://www.youtube.com/embed/4UZrsTqkcW4'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</WidgetVideo>

			<WidgetVideo>
				<h4>JavaScript Programming - Full Course</h4>
				<iframe
					width='100%'
					height='315'
					src='https://www.youtube.com/embed/jS4aFq5-91M'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</WidgetVideo>

			<WidgetVideo>
				<h4>Learn TypeScript from Scratch!</h4>
				<iframe
					width='100%'
					height='300'
					src='https://www.youtube.com/embed/BwuLxPH8IDs?autoplay=1&mute=1'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</WidgetVideo>

			<WidgetVideo>
				<h4>CS50 2021 - Lecture 0 - Scratch</h4>
				<iframe
					width='100%'
					height='315'
					src='https://www.youtube.com/embed/XGEh61saXT4'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</WidgetVideo>

			<WidgetVideo>
				<h4>User Authentication (Node js, Express)</h4>
				<iframe
					width='100%'
					height='300'
					src='https://www.youtube.com/embed/F-sFp_AvHc8'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
			</WidgetVideo>
		</WidgetWrapper>
	);
};

export default Widget;

const WidgetWrapper = styled.div`
	flex: 0.3;
	min-height: 50vh;
	max-width: 30rem;
	min-width: 25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 3rem;

	@media (max-width: 75rem) {
		display: none;
	}
`;

const WidgetVideo = styled.div`
	margin: 1rem;
	h4 {
		padding-bottom: 0.5rem;
		color: var(--color-primary);
	}
`;
