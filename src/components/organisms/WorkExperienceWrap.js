import React from "react";
import styled from "styled-components";
import workExperiencedata from "../../assets/data/workExperiencedata";
import Heading from "../atoms/Heading";

const WorkExperienceWrap = () => {
  // 데이터가 없을 경우 로딩 중 메시지 표시
  if (!workExperiencedata.workExperienceList) {
    return <div>데이터를 로드하는 중입니다...</div>;
  }

  // 데이터 렌더링
  const workExperiencelist = workExperiencedata.workExperienceList.map((activity, index) => (
    <div className="experience-item" key={index}>
      <Heading level="3" className="experience-label">
        {activity.label}
      </Heading>
      <div className="date">{activity.date}</div>
      <ul className="experience-detail">
        {activity.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  ));

  return <StyledWorkExperienceWrap>{workExperiencelist}</StyledWorkExperienceWrap>;
};

const StyledWorkExperienceWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .experience-item {
    width: 60%;
    padding: 20px 60px;
    border: 2px solid #252525;
    border-radius: 5px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;

    /* 애니메이션을 적용하기 위한 스타일 */
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

    .experience-label {
      margin-top: 0px;
      margin-bottom: 10px;
      font-size: 18px;
      color: ${(props) => props.theme.mainColor};
    }

    .date {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 10px;
    }

    .experience-detail {
      list-style-type: none;
      padding-left: 0;

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
    .experience-item {
      width: 48%; /* 2개 아이템을 한 줄에 표시 */
    }
  }

  @media ${(props) => props.theme.mobile} {
    .experience-item {
      width: 100%; /* 모바일에서 전체 너비 */
      padding: 15px;
    }
  }
`;

export default WorkExperienceWrap;
