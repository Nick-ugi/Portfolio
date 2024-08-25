import React from "react";
import { useParams } from "react-router-dom";
import Header from "../organisms/Header";
import PageHeader from "../molecules/PageHeader";
import DetailWrap from "../organisms/DetailWrap";
import data from "../../assets/data/portfoilodata";

function ProjectDetail() {
  const { name } = useParams();
  const portfolioInfo = data.portfolioList.find(info => info.name === name);

  return (
    <div>
      <Header />
      <main>
        <PageHeader titleBg="Works">
          It's <span className="point">{name}</span>
        </PageHeader>
        <section>
          {portfolioInfo ? <DetailWrap project={portfolioInfo} /> : <p>Project not found</p>}
        </section>
      </main>
    </div>
  );
}

export default ProjectDetail;
