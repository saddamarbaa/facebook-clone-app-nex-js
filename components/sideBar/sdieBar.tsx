/** @format */
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import RestoreIcon from "@material-ui/icons/Restore";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import WorkIcon from "@material-ui/icons/Work";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import EventIcon from "@material-ui/icons/Event";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import TableChartIcon from "@material-ui/icons/TableChart";
import SendIcon from "@material-ui/icons/Send";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarsIcon from "@material-ui/icons/Stars";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GamesIcon from "@material-ui/icons/Games";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SettingsIcon from "@material-ui/icons/Settings";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogOutState, selectUser } from "../../features/user/userSlice";
import { useRouter } from "next/router";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../config/firebase";
import Option from "./SideBarOption";

const SideBar: React.FunctionComponent = (props) => {
	const [user, loading] = useAuthState(auth);
	const logInUser = useSelector(selectUser);
	const dispatch = useDispatch();
	const router = useRouter();

	return (
		<SideBarWrapper>
			<div id='fixed-position'>
				<SideBarHeader>
					<div className='user'>
						<IconButton className='avatar icons'>
							<Avatar
								src={
									user?.photoURL
										? user?.photoURL
										: "/images/tem-img.png"
								}
							/>
						</IconButton>
						<span>{user?.displayName ? user?.displayName : ""}</span>
						<FiberManualRecordIcon className='absolute-icon' />
					</div>
				</SideBarHeader>
				<SideBarBody>
					<Option
						Icon={PeopleAltIcon}
						title='Friends'
						color='#4AD2C0'
						option='request'
					/>
					<Option Icon={GroupWorkIcon} title='Group' color='#197EF3' />
					<Option
						Icon={StoreMallDirectoryIcon}
						title='MarketPlace'
						color='#4AD2C0'
						option='new'
					/>
					<Option
						Icon={VideoLibraryIcon}
						title='Watch'
						color='#197EF3'
						option='new videos'
					/>

					<Option Icon={RestoreIcon} title='Memories' color='#4AD2C0' />
					<Option Icon={TurnedInIcon} title='Saved' color='#BB32B3' />
					<Option Icon={EmojiFlagsIcon} title='Pages' color='#DE7F22' />
					<Option
						Icon={FavoriteIcon}
						title='Covid19 Information'
						color='#BE33B2'
					/>
					<Option
						Icon={EventIcon}
						title='Events'
						color='#F34F6C'
						option='notifications'
					/>
					<Option Icon={WorkIcon} title='Jobs' color='#DE7F22' />

					<Option
						Icon={TableChartIcon}
						title='Ads Manger'
						color='#197EF3'
					/>

					<Option Icon={SendIcon} title='Campus' color='#197EF3' />

					<Option Icon={StarsIcon} title='Favorites' color='#FAD857' />

					<Option
						Icon={SupervisorAccountIcon}
						title='Friends List'
						color='#197EF3'
					/>
					<Option
						Icon={GamesIcon}
						title='Video Games'
						color='#DE7F22'
						option='new'
					/>

					<Option Icon={LiveTvIcon} title='Live Videos' color='#E42243' />
					<Option
						Icon={SettingsIcon}
						title='Messenger Kid'
						color='#A0D977'
					/>
					<Option
						Icon={WbSunnyIcon}
						title='Weather'
						color='#F8CC47'
						option='notifications'
					/>
					<Option
						Icon={ViewAgendaIcon}
						title='Most Recently'
						color='#197EF3'
					/>
				</SideBarBody>
			</div>
		</SideBarWrapper>
	);
};

export default SideBar;

const SideBarWrapper = styled.div`
	flex: 0.3;
	min-height: 100%;
	max-width: 23rem;
	min-width: 19rem;

	@media (max-width: 42.375rem) {
		display: none;
	}

	#fixed-position {
		position: fixed;
		max-width: 23rem;
		min-width: 19rem;
	}
`;

const SideBarHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	transition: 0.3s;
	margin-bottom: 1rem;

	&:hover {
		background-color: rgba(220, 227, 232);
	}

	.user {
		display: flex;
		align-items: center;
		position: relative;

		.absolute-icon {
			position: absolute;
			color: green;
			left: 37px;
			top: 43px;
			font-size: 1.4rem;
			@media (max-width: 75rem) {
				/* display: none; */
			}
		}

		span {
			font-weight: bold;
		}
	}
`;

const SideBarBody = styled.div`
	max-height: 75vh;
	/* overflow: hidden !important; */

	&:hover {
		overflow-y: auto !important;
	}
`;
