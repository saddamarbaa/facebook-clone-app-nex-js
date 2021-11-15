/** @format */
import { IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { getRandomIntNumberBetween } from "../../lib/api-util";

import styled from "styled-components";

type OptionProps = {
	// Icon?: (props: SvgIconProps) => JSX.Element;
	Icon?: any;
	title?: string;
	color?: string;
	option?: string;
};

const Option: React.FunctionComponent<OptionProps> = ({
	Icon,
	title,
	color,
	option,
}) => {
	return (
		<SideBarOptionWrapper>
			<IconButton>
				<Icon
					style={{ color: color, fontSize: "2rem", marginLeft: "0.5rem" }}
				/>
			</IconButton>
			<div className='relative-div'>
				<p>{title}</p>
				{option && (
					<div className='absolute-pos'>
						<FiberManualRecordIcon className='absolute-icon' />{" "}
						{getRandomIntNumberBetween(1, 10)}
						<span style={{ marginLeft: "3px" }}> {option}</span>
					</div>
				)}
			</div>
		</SideBarOptionWrapper>
	);
};

export default Option;

const SideBarOptionWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		background-color: rgba(220, 227, 232);
	}

	.relative-div {
		transition: 0.3s;
		position: relative;
		.absolute-pos {
			position: absolute;
			bottom: -16px;
			font-size: 0.8rem;
			display: flex;
			align-items: center;
			color: #1877f2;
			width: 200px;
			overflow: hidden;
			&:hover {
				background-color: rgba(220, 227, 232);
			}
		}

		.absolute-icon {
			color: #1877f2;
			font-size: 0.9rem;
			margin-right: 4px;
		}
	}
`;
