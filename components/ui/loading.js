/** @format */

import React from "react";
import { Circle } from "better-react-spinkit";
import Image from "next/image";

const Loading = () => {
	return (
		<div
			style={{
				background: "#f8f8f8",
				width: "100vw",
				height: "100vh",
				display: "grid",
				placeItems: "center",
			}}>
			<div
				style={{
					padding: "100px",
					paddingTop: "50px",
					textAlign: "center",
					background: "white",
					borderRadius: "6px",
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
					display: "grid",
					placeItems: "center",
				}}>
				<div
					className='logo'
					style={{
						position: "relative",
						cursor: "pointer",
						marginBottom: "3rem",
						width: "7rem",
						height: "7rem",
						display: "block",
					}}>
					<Image
						className='logo-img'
						src='/images/Facebook-logo.svg'
						alt='Picture of the Facebook'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div>
					<Circle color='#006aff' size={60} />
				</div>
			</div>
		</div>
	);
};

export default Loading;
