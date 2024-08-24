import React, { Component } from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import PageHeader from "../molecules/PageHeader";
import ExperienceWrap from "../organisms/ExperienceWrap";
import SkillsWrap from "../organisms/SkillsWrap";
import PageWrap from "../templates/PageWrap";

export class AboutPage extends Component {
	render() {
		return (
			<PageWrap page="about">
				<StyledSkills>
					<PageHeader titleBg="Skills">
						About <span className="point">Me</span>
					</PageHeader>
					<section>
						<Heading level="2">EDUCATION</Heading>
						<ExperienceWrap />
					</section>

					<section>
						<Heading level="2">MY SKILLS</Heading>
						<SkillsWrap />
					</section>
				</StyledSkills>
			</PageWrap>
		);
	}
}

const StyledSkills = styled.main`
	/* Background color and text color */
	background-color: #333;
	color: #fff;

	section {
		max-width: 1140px;
		margin: auto;
		padding-bottom: 80px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section:not(:last-child)::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 500px;
		height: 1px;
		background-color: #252525;
	}

	h2 {
		margin-bottom: 40px;
		font-size: 26px;
		font-weight: 600;
		text-align: center;
		color: #fff;
	}

	@media (max-width: 768px) {
		section {
			padding-bottom: 40px;
		}

		section:not(:last-child)::after {
			width: 70%;
		}
	}
`;

export default AboutPage;