import React, { Component } from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import PageHeader from "../molecules/PageHeader";
import ExperienceWrap from "../organisms/ExperienceWrap";
import SkillsWrap from "../organisms/SkillsWrap";
import PageWrap from "../templates/PageWrap";

export class aboutPage extends Component {
	render() {
		return (
			<PageWrap page="about">
				<StyledSkills>
					<PageHeader titleBg="Skills">
						About <span className="point">Me</span>
					</PageHeader>

					<section>
						<Heading level="2">MY SKILLS</Heading>
						<SkillsWrap />
					</section>

					<section>
						<Heading level="2">EXPERIENCE & EDUCATION</Heading>
						<ExperienceWrap />
					</section>
				</StyledSkills>
			</PageWrap>
		);
	}
}

const StyledSkills = styled.main`
	background-color: #000; /* 배경을 검정색으로 설정 */
	color: #fff; /* 텍스트 색상을 흰색으로 설정 */

	section {
		max-width: 1140px;
		margin: auto;
		padding-bottom: 80px;
		position: relative; /* 섹션을 상대 위치로 설정 */
		
		/* 중앙 정렬을 위한 margin 및 flexbox 설정 */
		display: flex;
		flex-direction: column;
		align-items: center;

		&:not(:last-child)::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%; /* 가상 요소를 중앙에 배치 */
			transform: translateX(-50%); /* 가상 요소를 정확히 중앙에 위치시키기 위한 변환 */
			width: 500px;
			height: 1px;
			background-color: #252525; /* 구분선 색상 */
		}

		> h2 {
			margin-bottom: 40px;
			font-size: 26px;
			font-weight: 600;
			text-align: center;
			color: #fff; /* 제목 색상 흰색으로 설정 */
		}
	}

	@media ${(props) => props.theme.mobile} {
		section {
			padding-bottom: 40px;

			&:not(:last-child)::after {
				width: 70%;
			}
		}
	}
`;

export default aboutPage;
