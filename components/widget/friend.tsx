/** @format */

import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";

type FriendType = {
	name?: string;
	image?: string;
	quote?: string;
	isOffLine?: boolean;
};

const Friend: React.FunctionComponent<FriendType> = ({
	name,
	image,
	quote,
	isOffLine,
}) => {
	return (
		<Wrapper>
			<div className='user-heading-s'>
				<IconButton style={{ marginLeft: "-1rem" }}>
					<Avatar src={image ? image : "/images/tem-img.png"} />
				</IconButton>
				<FiberManualRecordIcon
					className='absolute-icon'
					style={{ color: isOffLine ? "red" : "green" }}
				/>

				<div className='user-head'>
					<span>{name}</span>
					<p>{quote}</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Friend;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.2rem;
	cursor: pointer;
	color: #919294;

	.user-heading-s {
		display: flex;
		align-items: center;
		position: relative;

		.user-head {
			margin-top: 4px;

			span {
				display: block;
				font-size: 1rem;
				margin-bottom: 4px;
			}

			p {
				font-size: 0.85rem;
				font-weight: bold;
				color: var(--color-primary);
			}
		}
	}

	.absolute-icon {
		position: absolute;
		color: green;
		left: 17px;
		top: 47px;
		font-size: 1rem;
	}

	&:hover {
		background: #ced0d4;
	}
`;
