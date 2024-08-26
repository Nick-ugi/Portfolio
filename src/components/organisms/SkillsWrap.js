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
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	width: 100%;
	
	.skill-list {
		padding: 20px;
		border: 1px solid #252525;
		border-radius: 5px;
		cursor: default;
		background-color: #444;

		.skill-label {
			margin-bottom: 10px;
			i {
				color: ${(props) => props.theme.mainColor};
				padding-right: 10px;
				font-size: 24px;
				vertical-align: middle;
			}
		}

		.skill-detail {
			list-style-type: none; /* 기본 점 제거 */
			padding-left: 0; /* 기본 패딩 제거 */
			
			li {
				padding-left: 30px;
				font-size: 14px;
				line-height: 1.5;
				color: rgba(255, 255, 255, 0.8);
				position: relative;

				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					width: 6px;
					height: 6px;
					background: ${(props) => props.theme.mainColor};
					border-radius: 50%;
				}
			}
		}
	}

	@media ${(props) => props.theme.laptop} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${(props) => props.theme.mobile} {
		grid-template-columns: 1fr;
	}
`;

export default SkillsWrap;
