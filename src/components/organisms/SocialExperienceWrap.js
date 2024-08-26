import React from "react";
import styled from "styled-components";
import socialExperiencedata from "../../assets/data/socialExperiencedata";
import Heading from "../atoms/Heading";

const SocialExperienceWrap = () => {
  if (!socialExperiencedata.socialExperienceList) {
    return <div>데이터를 로드하는 중입니다...</div>;
  }

  const socialExperiencelist = socialExperiencedata.socialExperienceList.map((activity, index) => (
    <div className="experience-list" key={index}>
      <Heading level="3" className="experience-label">
        {activity.label}
      </Heading>
      <div className="date">{activity.date}</div>
      <ul className="experience-detail">
        {activity.detail.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  ));

  return <StyledSocialExperienceWrap>{socialExperiencelist}</StyledSocialExperienceWrap>;
};

const StyledSocialExperienceWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  .experience-list {
    padding: 20px;
    border: 1px solid #252525;
    border-radius: 5px;
    cursor: default;
    position: relative;
    overflow: hidden; /* 애니메이션이 영역을 넘지 않게 합니다 */
    transition: all 0.3s ease;
    
    &:hover {
      border-color: ${(props) => props.theme.mainColor};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      transform: scale(1.02) rotate(2deg);
    }

    .experience-label {
      margin-top: 0;
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
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 1fr;
  }
`;

export default SocialExperienceWrap;
