/** @format */

import styled from "styled-components";
import Feeds from "../feeds/feeds";
import SideBar from "../sideBar/sideBar";

const SingleMessage = (props) => {
	return (
		<SingleMessagePageWrapper>
			<SideBar unVerifiedFriends={props?.unVerifiedFriends} />
			<Feeds chatsInDb={props?.chatsInDb} chatRoomId={props?.chatRoomId} />
		</SingleMessagePageWrapper>
	);
};

export default SingleMessage;

const SingleMessagePageWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	max-height: 100vh;
	width: 100vw;
	overflow: hidden;
`;
