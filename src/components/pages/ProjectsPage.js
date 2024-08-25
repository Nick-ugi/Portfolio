import React, { Component } from "react";
import PageWrap from "../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import Heading from "../atoms/Heading";
import PortfolioMain from "../organisms/PortfolioMain";
import SkillsWrap from "../organisms/SkillsWrap";

export class ProjectsPage extends Component {
	render() {
		return (
			<PageWrap page="projects">
				<main>
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
				</main>
			</PageWrap>
		);
	}
}


export default ProjectsPage;
