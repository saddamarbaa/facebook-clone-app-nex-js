/** @format */

import styled from "styled-components";
import Feeds from "../feeds/feeds";
import MainNavigation from "../header/main-navigation";
import SideBar from "../sideBar/sdieBar";
import Widget from "../widget/widget";

const HomePageComponent = (props) => {
	return (
		<HomePageComponentWrapper>
			<MainNavigation />
			<AppBodyWrapper>
				<SideBar />
				<Feeds />
				<Widget />
			</AppBodyWrapper>
		</HomePageComponentWrapper>
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
