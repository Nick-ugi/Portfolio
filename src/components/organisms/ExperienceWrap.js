import React from "react";
import styled from "styled-components";
import skillData from "../../assets/data/skilldata";

const ExperienceWrap = () => {
  return (
    <StyledExpWrap>
      {skillData.educationList.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="position">{edu.position}</div>
          <div className="period">{edu.period}</div>
          <div className="company">{edu.company}</div>
          <div className="explain">
            {edu.explain.map((item, idx) => (
              <div key={idx} className="explain-item">
                <div className="tech">{item.tech}</div>
                {Array.isArray(item.description) ? (
                  <ul className="description-list">
                    {item.description.map((desc, i) => (
                      <li key={i} className="description">{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="description">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </StyledExpWrap>
  );
};

const StyledExpWrap = styled.div`
  background-color: #444; /* 배경색을 SkillsWrap에 맞게 설정 */
  padding: 20px; /* 적절한 패딩 추가 */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .education-item {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #252525; /* 테두리 색상을 SkillsWrap에 맞게 설정 */
    border-radius: 8px;
    background-color: #333; /* 배경색을 SkillsWrap에 맞게 설정 */
  }

  .period {
    font-size: 18px;
    font-style: italic;
    color: rgba(255, 255, 255, 0.6); /* 텍스트 색상 */
    margin-bottom: 10px;
  }

  .position {
    color: ${(props) => props.theme.mainColor}; /* 아이콘 색상 */  
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .company {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6); /* 텍스트 색상 */
    margin-bottom: 20px;
  }

  .explain-item {
    margin-bottom: 20px;
  }

  .tech {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .description-list {
    margin-left: 20px;
    list-style-type: none; /* 기본 점 제거 */
    padding-left: 0; /* 기본 패딩 제거 */
  }

  .description {
    margin-left: 20px;
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.8); /* 텍스트 색상 */
    line-height: 1.6; /* 줄 간격 */
  }

  .description-list li {
    position: relative;
    padding-left: 30px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 6px;
      background: ${(props) => props.theme.mainColor}; /* 포인트 색상 */
      border-radius: 50%;
    }
  }
`;

export default ExperienceWrap;
