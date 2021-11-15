/** @format */

import { useEffect, useRef } from "react";
import styled from "styled-components";

import Feeds from "../feeds/feeds";
import MainNavigation from "../header/main-navigation";
import SideBar from "../sideBar/sdieBar";
import Widget from "../widget/widget";

const HomePageComponent: React.FunctionComponent = (props) => {
	const autoScrollToBottomRef = useRef<HTMLDivElement>(null);

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);
	return (
		<>
			{/* Empty div for auto scroll */}
			<div
				ref={autoScrollToBottomRef}
				// style={{
				// 	paddingTop: "4rem",
				// 	position: "absolute",
				// 	top: "-100px",
				// }}
				className='auto-scroll'></div>
			<HomePageComponentWrapper>
				<MainNavigation />

				<AppBodyWrapper>
					<SideBar />
					<Feeds />
					<Widget />
				</AppBodyWrapper>
			</HomePageComponentWrapper>
		</>
	);
};

export default HomePageComponent;

const HomePageComponentWrapper = styled.div`
	min-height: 100vh;
	width: 100%;
`;

const AppBodyWrapper = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100%;
	align-items: stretch;
	max-width: 90.75rem;
	overflow: hidden;
	margin: 0 auto;
`;
