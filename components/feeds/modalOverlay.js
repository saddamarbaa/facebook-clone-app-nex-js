/** @format */

import ReactDOM from "react-dom";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
	setHideComposeState,
	setShowComposeState,
} from "../../features/sendPost/sendPostSlice";
import BackDrop from "../ui/backdrop";

const NewPost = ({ name, image }) => {
	const dispatch = useDispatch();

	const closeCompose = () => {
		dispatch(setHideComposeState());
	};

	const showCompose = () => {
		dispatch(setShowComposeState());
	};

	// Portal
	return (
		<BackDrop closeCompose={closeCompose}>
			{ReactDOM.createPortal}

			{ReactDOM.createPortal(
				<ModalOverlay>
					<Container>
						<TopContent>
							<EditBottom>
								<IconButton>
									<CloseIcon
										style={{
											fontSize: "1.8rem",
											color: "blue",
										}}
										onClick={closeCompose}
									/>
								</IconButton>
							</EditBottom>
							<h2>Create Post</h2>
						</TopContent>

						<BodyContent>
							<UserHeading>
								<IconButton style={{ marginLeft: "-1rem" }}>
									<Avatar
										src={image ? image : "/images/tem-img.png"}
									/>
								</IconButton>
								<div className='user-head'>
									<span>Demo User</span>
								</div>
							</UserHeading>

							<div className='control'>
								<textarea
									id='subject'
									maxLength='55000'
									minLength='10'
									rows='4'
									cols='50'
									name='subject'
									placeholder="What's on your mind, (user)?"
									required></textarea>
							</div>
						</BodyContent>

						<BottomContent>
							<CustomButton>Post</CustomButton>
						</BottomContent>
					</Container>
				</ModalOverlay>,
				document.getElementById("modal--overlay--root"),
			)}
		</BackDrop>
	);
};
export default NewPost;

const ModalOverlay = styled.div`
	position: fixed;
	overflow: hidden;
	z-index: 300;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	margin: 3rem auto;
	width: 95%;
	cursor: pointer;
	max-width: 31.25rem;
	min-height: 25rem;
	border-radius: 6px;
	background-color: white;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	padding-bottom: 0.5rem;
`;

const TopContent = styled.div`
	text-align: center;
	padding: 1rem;
	border-bottom: 1px solid #dadde1;
	position: relative;

	h2 {
		@media (max-width: 578px) {
			font-size: 1.3rem;
			text-align: left;
		}
	}
`;

const BodyContent = styled.div`
	flex: 1;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	.control {
		margin-top: 1rem;
		display: flex;
		flex: 1;
		textarea {
			flex: 1;
			border: none;
			outline: none;
			width: 100%;
			min-height: 220px;
			height: 100%;
			background: transparent;
			font-size: 1.2rem;

			::placeholder {
				/* Chrome, Firefox, Opera, Safari 10.1+ */
				font-size: 1.2rem;
				font-weight: bold;
				color: gray;
				opacity: 1; /* Firefox */

				@media (max-width: 578px) {
					font-size: 1rem;
				}
			}
			:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				font-size: 1.2rem;
				color: gray;
				font-weight: bold;
				opacity: 1;

				@media (max-width: 578px) {
					font-size: 1rem;
				}
			}
			::-ms-input-placeholder {
				/* Microsoft Edge */
				font-size: 1.2rem;
				opacity: 1;
				color: gray;
				font-weight: bold;

				@media (max-width: 578px) {
					font-size: 1rem;
				}
			}
		}
	}
`;

const BottomContent = styled.div`
	padding: 1rem;
`;

const CustomButton = styled.button`
	display: block;
	font: inherit;
	cursor: pointer;
	font-weight: bold;
	background-color: var(--color-primary);
	border: 1px solid var(--color-primary);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	transition: 3s;
	color: white;
	font-size: 1rem;
	display: block;
	height: 2.7rem;
	width: 100%;
	margin: 0 auto;

	&:hover {
		background: rgba(14, 118, 168, 0.8);
	}
`;

const EditBottom = styled.div`
	position: absolute;
	height: 2.5rem;
	width: 2.5rem;
	background: #e4e6eb;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	right: 1rem;
	top: 1.1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	z-index: 100;

	@media (max-width: 578px) {
		top: 10px;
	}
`;

const UserHeading = styled.div`
	display: flex;
	align-items: center;
`;
