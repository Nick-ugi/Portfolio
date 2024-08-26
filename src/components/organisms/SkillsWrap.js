	import React from "react";
	import data from "../../assets/data/skilldata";
	import styled from "styled-components";
	import Heading from "../atoms/Heading";

	function SkillsWrap() {
		const skillsList = data.skillList.map((list, idx) => (
			<div className="skill-list" key={idx}>
				<Heading level="3" className="skill-label">
					<i className={list.icon}></i>: {list.label}
				</Heading>

				<ul className="skill-detail">
					{list.detail.map((detail, idx) => (
						<li key={idx}>{detail}</li>
					))}
				</ul>
			</div>
		));
		return <StyledSkillsWrap>{skillsList}</StyledSkillsWrap>;
	}

	const StyledSkillsWrap = styled.div`
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		.skill-list {
			width: calc(25%);
			margin: 0 15px 30px;
			padding: 20px 30px;
			border: 1px solid #252525;
			border-radius: 5px;
			cursor: default;
			position: relative;

			.skill-label {
				margin-bottom: 10px;
				margin-top: 0px;
				i {
					color: ${(props) => props.theme.mainColor};
					padding-right: 10px;
					font-size: 50px;
					vertical-align: text-top;
				}
			}

			.skill-detail {
				li {
					position: relative;
					padding: 0 0 10px 30px;
					font-size: 14px;
					line-height: 1.5;
					color: rgb(255 255 255 / 80%);
					&::before {
						content: "";
						position: absolute;
						left: 0;
						top: 13px;
						width: 20px;
						height: 1px;
						background: ${(props) => props.theme.mainColor};
					}
				}
			}

			&::before,
			&::after {
				content: "";
				box-sizing: border-box;
				position: absolute;
				width: 0;
				height: 0;
				border-radius: 5px;
				border: 1px solid transparent;
			}

			&::before {
				top: 0;
				left: 0;
				border-top-color: ${(props) => props.theme.mainColor};
				border-right-color: ${(props) => props.theme.mainColor};
			}

			&::after {
				bottom: 0;
				right: 0;
				border-bottom-color: ${(props) => props.theme.mainColor};
				border-left-color: ${(props) => props.theme.mainColor};
			}

			&:hover {
				&::before {
					width: 100%;
					height: 100%;
					transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
				}
				&::after {
					width: 100%;
					height: 100%;
					transition: border-color 0s ease-out 0.3s, width 0.15s ease-out 0.3s, height 0.15s ease-out 0.45s;
				}
			}
		}

		@media ${(props) => props.theme.laptop} {
			width: 85%;
			margin: auto;
			.skill-list {
				width: calc(50% - 30px);
			}
		}

		@media ${(props) => props.theme.mobile} {
			width: 90%;
			.skill-list {
				width: calc(100% - 30px);
			}
		}
	`;

	export default SkillsWrap;
