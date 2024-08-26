import React, { Component } from "react";
import styled from "styled-components";
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import Heading from "../atoms/Heading";
import PortfolioMain from "../organisms/PortfolioMain";
import SkillsWrap from "../organisms/SkillsWrap";

// 스타일이 적용된 main
const StyledMain = styled.main`
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

  @media (max-width: 768px) {
    section {
      padding-bottom: 40px;
    }

    section:not(:last-child)::after {
      width: 70%;
    }
  }
`;

export class ProjectsPage extends Component {
	render() {
		return (
			<PageWrap page="projects">
				<StyledMain>
					<PageHeader titleBg="Works">
						My <span className="point">Projects</span>
					</PageHeader>
					<section>
						<PortfolioMain />
					</section>
					<section>
						<Heading level="2">MY SKILLS</Heading>
						<SkillsWrap />
					</section>
				</StyledMain>
			</PageWrap>
		);
	}
}

export default ProjectsPage;
