import React from "react";
import styled from "styled-components";
import certificatedata from "../../assets/data/certificatedata";
import Heading from "../atoms/Heading";

const CertificateWrap = () => {
  // 데이터가 없을 경우 로딩 중 메시지 표시
  if (!certificatedata.certificateList) {
    return <div>데이터를 로드하는 중입니다...</div>;
  }

  // 데이터 렌더링
  const certificateList = certificatedata.certificateList.map((certificate, index) => (
    <div className="certificate-item" key={index}>
      <Heading level="3" className="certificate-label">
        {certificate.label}
      </Heading>
      <div className="date">{certificate.date}</div>
      <div className="publisher">{certificate.publisher}</div>
    </div>
  ));

  return <StyledCertificateWrap>{certificateList}</StyledCertificateWrap>;
};

const StyledCertificateWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  .certificate-item {
    padding: 20px;
    border: 1px solid #252525;
    border-radius: 5px;
    cursor: default;
    background-color: #444;

    .certificate-label {
      margin-bottom: 10px;
      font-size: 18px;
      color: ${(props) => props.theme.mainColor};
    }

    .date {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 10px;
    }

    .publisher {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media ${(props) => props.theme.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 1fr;
  }
`;

export default CertificateWrap;
