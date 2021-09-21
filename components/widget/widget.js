/** @format */
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { CardGiftcard } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import { friends } from "../../lib/api-util";

import Friend from "./friend";

const Widget = () => {
	return (
		<WidgetWrapper>
			<div id='fixed-position'>
				<BirthdayContent>
					<Card>
						<div className='birthday'>
							<div className='first-div'>
								<p>
									<CardGiftcard
										style={{ marginRight: "1rem", color: "#4AD2C0" }}
									/>
									<span>Birthdays</span>
								</p>
								<MoreHorizIcon />
							</div>
							<div className='second-div'>
								<span style={{ marginRight: "8px" }}>
									Mark Zuckerberg
								</span>
								Birthdays is today
							</div>
						</div>
					</Card>
				</BirthdayContent>

				<Friends>
					<EditBottom>
						<ModeEditIcon
							style={{
								fontSize: "2rem",
								color: "black",
							}}
						/>
					</EditBottom>
					<HeadingContent>
						<h4>Contact</h4>
						<div>
							<SearchIcon style={{ marginTop: "4px" }} />
							<MoreHorizIcon
								style={{
									marginLeft: "2rem",
								}}
							/>
						</div>
					</HeadingContent>

					{friends?.map((friend, index) => {
						return (
							<Friend
								key={index}
								image={friend?.image}
								name={friend?.name}
								quote={friend?.quote}
								isOffLine={index === 3 || index === 5}
							/>
						);
					})}
				</Friends>
			</div>
		</WidgetWrapper>
	);
};

export default Widget;

const WidgetWrapper = styled.div`
	flex: 0.3;
	min-height: 100vh;
	max-width: 30rem;
	min-width: 25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 3rem;
	@media (max-width: 75rem) {
		display: none;
	}

	#fixed-position {
		position: fixed;
		max-width: 30rem;
		min-width: 25rem;
	}
`;

const BirthdayContent = styled.div`
	max-width: 20rem;
	width: 20rem;
	margin: 0 auto;
	margin-top: 1rem;
	margin-bottom: 2rem;

	.birthday {
		padding: 1rem;
		min-height: 6.25rem;
		padding: 1rem;
		cursor: pointer;
	}

	.first-div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		p {
			display: flex;
			align-items: center;
		}
	}

	.second-div {
		font-size: 0.9rem;
		margin-top: 1rem;

		span {
			font-weight: bold;
		}
	}
`;

const Friends = styled.div`
	padding: 1rem 0;
	max-width: 20rem;
	margin: 0 auto;
	margin-top: 1rem;
	color: #919294;
	border-top: 1px solid #ced0d4;
	position: relative;
`;

const HeadingContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;

	div {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		color: #919294;
	}
`;

const EditBottom = styled.div`
	position: absolute;
	height: 4rem;
	width: 4rem;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	right: 0rem;
	top: 18.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	z-index: 100;
`;
