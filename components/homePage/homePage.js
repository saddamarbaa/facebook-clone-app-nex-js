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
				{/* <SideBar /> */}
				<Feeds />
				{/* <Widget /> */}
			</AppBodyWrapper>
		</HomePageComponentWrapper>
	);
};

export default HomePageComponent;

const HomePageComponentWrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	max-width: 100%;
`;

const AppBodyWrapper = styled.div`
	display: flex;
	width: 100%;
	min-height: 80vh;
	overflow: hidden !important;
`;
