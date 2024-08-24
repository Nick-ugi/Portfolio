import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Heading from "../atoms/Heading";

// 애니메이션 정의
const messageSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  30%, 60% {
    opacity: 1;
    transform: translateY(0);
  }
  90%, 100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

// Component Function
function AboutTxtWrap() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = ["Dongwook Kim", "WEB DEVELOPER"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHome>
      <div className="left">
        <div className="color-block"></div>
        <div className="img-box"></div>
      </div>
      <div className="right">
        <div className="tit-wrap">
          <Heading level="2">HI! HOW ARE YOU?</Heading>
          <Heading>
            I'M{" "}
            <span className="message">
              {messages.map((message, index) => (
                <strong
                  key={index}
                  className={`message-item ${index === currentMessage ? "active" : ""}`}
                >
                  {message}
                </strong>
              ))}
            </span>
          </Heading>
          <p>
            새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다. 현재 프론트엔드 개발자로 구직중입니다. 맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다.
          </p>
        </div>
        <section>
          <Heading level="2">PERSONAL INFOS</Heading>
          <ul>
            <li>
              <span>Name : </span>김동욱
            </li>
            <li>
              <span>Age : </span>28, 1996.06
            </li>
            <li>
              <span>Phone : </span>010.3308.8950
            </li>
            <li>
              <span>Address : </span>경기도 안양시
            </li>
            <li>
              <span>Email : </span>urukuru.kr@gmail.com
            </li>
          </ul>
        </section>
        <Link to="/about" className="more-btn">
          MORE ABOUT ME
        </Link>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.main`
  display: flex;
  height: 100vh;
  max-width: 1600px;
  margin: auto;
  background-color: #333;

  .left {
    flex: 0 0 35%;
    position: relative;
    max-width: 600px;
    background-color: #111;
    &::after {
      content: "";
      display: inline-block;
      position: fixed;
      top: 0;
      left: calc(50% - 1440px);
      z-index: -1;
      width: 50%;
      max-width: 1000px;
      height: 100%;
      background-color: ${(props) => props.theme.mainColor};
    }
    .color-block {
      position: absolute;
      top: -60%;
      left: -40vw;
      z-index: 0;
      width: 50vw;
      height: 200%;
      transform: rotate(-12deg);
      background-color: ${(props) => props.theme.mainColor};
    }
    .img-box {
      height: 90vh;
      margin: 5vh 0 0 30px;
      background-image: url(${(props) => props.theme.mainSrc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      border-radius: 15px;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
      position: relative;
      z-index: 1;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10% 0 7%;
    .tit-wrap {
      position: relative;
      margin-bottom: 60px;
      h2 {
        font-size: 22px;
        color: #fff; /* 흰색으로 변경 */
      }
      h1 {
        margin-bottom: 20px;
        font-size: 45px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        color: #fff; /* 흰색으로 변경 */
        .message {
          position: relative;
          width: 100%;
          height: auto;
          strong {
            display: block;
            color: ${(props) => props.theme.mainColor};
            opacity: 0;
            position: absolute;
            top: 0;
            left: 1rem; /* 1rem의 공백 추가 */
            width: calc(100% - 1rem); /* 공백 공간을 포함한 전체 너비 설정 */
            text-align: center;
            transition: opacity 1s ease-in-out;
            &.active {
              opacity: 1;
              animation: ${messageSlideIn} 5s ease-in-out infinite;
            }
          }
        }
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        padding: 0 15% 0 0;
        max-width: 670px;
        word-break: keep-all;
        color: #fff; /* 흰색으로 변경 */
      }
    }
    section {
      margin-bottom: 40px;
      h2 {
        margin-bottom: 20px;
        font-size: 26px;
        font-weight: 600;
        color: #fff; /* 흰색으로 변경 */
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
          padding-bottom: 10px;
          font-size: 16px;
          font-weight: 500;
          color: ${(props) => props.theme.mainColor};
          span {
            font-weight: 400;
            opacity: 0.8;
            color: #fff; /* 흰색으로 변경 */
          }
        }
      }
    }
    .more-btn {
      padding: 0px 40px;
      border-radius: 26px;
      background-color: ${(props) => props.theme.mainColor};
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      line-height: 46px;
      letter-spacing: 0.5px;
    }
  }

  @media ${(props) => props.theme.laptop} {
    .left {
      .color-block {
        top: -60%;
        left: -25vw;
        width: 40vw;
        height: 200%;
        transform: rotate(-9deg);
      }
    }
    .right {
      padding-right: 5%;
      .tit-wrap {
        margin-bottom: 40px;
        h1 {
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }
      }
      section {
        h2 {
          margin-bottom: 10px;
        }
        ul {
          li {
            width: 100%;
          }
        }
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    flex-wrap: wrap;
    .left {
      flex: none;
      width: 100%;
      overflow: hidden;
      .color-block {
        left: -40vw;
        width: 80vw;
        min-width: 250px;
        transform: rotate(-12deg);
      }
      .img-box {
        width: 90vw;
        height: 55vh;
        margin: 3vh 5vw;
        background-position: center;
      }
    }
    .right {
      width: 100%;
      flex: none;
      margin: 5vh 0;
      padding-bottom: 5vh;
      .tit-wrap {
        h1 {
          font-size: 35px;
          .message {
            strong {
              animation: ${messageSlideIn} 6s ease-in-out infinite;
              /* 공백 조정 */
              left: 0; /* 공백 없음 */
            }
          }
        }
        h2 {
          font-size: 20px;
        }
        p {
          padding-right: 5%;
        }
      }
    }
  }
`;

export default AboutTxtWrap;
