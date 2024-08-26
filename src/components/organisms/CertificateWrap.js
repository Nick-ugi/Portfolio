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
      <div className="certificate-content">
        <Heading level="3" className="certificate-label">
          {certificate.label}
        </Heading>
        <div className="publisher">{certificate.publisher}</div>
      </div>
      <div className="date">{certificate.date}</div>
    </div>
  ));

  return <StyledCertificateWrap>{certificateList}</StyledCertificateWrap>;
};

const StyledCertificateWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;

  .certificate-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #252525;
    border-radius: 8px;
    cursor: default;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* 점 추가 */
    &::before {
      content: "";
      position: absolute;
      left: 10px; /* 왼쪽 여백 */
      width: 8px;
      height: 8px;
      background-color: ${(props) => props.theme.mainColor};
      border-radius: 50%;
    }

    /* 호버 시 효과 */
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 0px 12px rgba(255, 180, 0, 0.4);
    }

    .certificate-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-left: 30px; /* 점과 내용 사이의 여백 */
    }

    .certificate-label {
      margin-bottom: 5px;
      margin-top: 0px;
      font-size: 18px;
      color: ${(props) => props.theme.mainColor};
      font-weight: bold;
    }

    .publisher {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
    }

    .date {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      margin-left: auto; /* 오른쪽 끝에 붙이기 */
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
