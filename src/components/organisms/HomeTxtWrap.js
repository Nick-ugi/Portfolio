import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Heading from "../atoms/Heading";

// Component Function
function AboutTxtWrap() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = ["Dongwook Kim", "WEB DEVELOPER"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 6000); // Change message every 5 seconds

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
                  index={index} // index 값을 전달
                >
                  {message}
                </strong>
              ))}
            </span>
          </Heading>
          <p>
            새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다. 현재 풀스택 웹개발자로 구직중입니다. 맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다.
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
// 애니메이션 정의
const messageSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30%);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 0;
    transform: translateY(-30%);
  }
  100% {
    opacity: 0;
    transform: translateY(-30%);
  }
`;
/* StyledHome 컴포넌트의 스타일 */
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
	  width: 45vh;
      height: 65vh;
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
    // margin-top: 10%; /* 중앙 정렬을 위한 margin-top 추가 */

    .tit-wrap {
    //   position: relative;
      margin-bottom: 60px;
    //   margin-top: 20px; /* 제목 영역 위쪽에 margin 추가 */

      h2 {
        font-size: 22px; /* 글자 크기 증가 */
        color: #fff;
      }

      h1 {
        margin-bottom: 20px;
        font-size: 45px; /* 글자 크기 증가 */
        font-weight: bold;
        // color: #fff;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
		line-height: 1;

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
            left: 1rem;
            width: calc(100% - 1rem);
            text-align: center;
            transition: opacity 1s ease-in-out;

            &.active {
              opacity: 1;
              animation: ${messageSlideIn} 6s ease-in-out infinite;
            }

            @media ${(props) => props.theme.mobile} {
              &.active {
                animation-delay: ${(props) => (props.index === 0 ? "0s" : "3s")};
              }
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
        color: #fff;
      }
    }

    section {
      margin-bottom: 40px;

      h2 {
        margin-bottom: 20px;
        font-size: 26px;
        font-weight: 600;
        color: #fff;
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
            color: #fff;
          }
        }
      }
    }

    .more-btn {
      padding: 0 40px;
      border-radius: 26px;
      background-color: ${(props) => props.theme.mainColor};
      font-size: 15px;
      font-weight: 500;
      color: #fff;
      line-height: 46px;
      letter-spacing: 0.5px;
      text-align: center;
      position: relative;
      bottom: 20px;
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
      margin-top: 5%; /* 오른쪽 박스의 margin-top 조정 */

      .tit-wrap {
        margin-bottom: 40px;
        margin-top: 10px; /* 제목 영역 위쪽 margin 조정 */

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
    flex-direction: column;
    height: auto;

    .left {
      width: 100%;

      .color-block {
        left: -20vw;
        width: 120vw;
        min-width: 250px;
        transform: rotate(-10deg);
        overflow: hidden;
      }

      .img-box {
        width: 100%;
        height: 50vh;
        margin: 3vh 0;
        background-position: center;
      }
    }

    .right {
      width: calc(100% - 40px);
      background-color: #333;
      z-index: 1;
      padding: 0 20px;
      margin: 0 auto;
      margin-top: 10%; /* 모바일에서도 margin-top 추가 */

      .tit-wrap {
        margin-bottom: 40px;
        margin-top: 10px; /* 모바일에서도 margin-top 조정 */

        h1 {
          font-size: 35px;
        }

        h2 {
          font-size: 20px;
        }

        p {
          padding-right: 0;
        }
      }
    }

    .more-btn {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
// const StyledHome = styled.main`
// 	display: flex;
// 	height: 100vh;
// 	max-width: 1600px;
// 	margin: auto;
// 	background-color: #000;

// 	.left {
// 		flex: 0 0 35%;
// 		position: relative;
// 		max-width: 600px;
// 		background-color: #111;
		
// 		&::after {
// 			content: "";
// 			display: inline-block;
// 			position: fixed;
// 			top: 0;
// 			left: calc(50% - 1440px);
// 			z-index: -1;
// 			width: 50%;
// 			max-width: 1000px;
// 			height: 100%;
// 			background-color: ${(props) => props.theme.mainColor};
// 		}
		
// 		.color-block {
// 			position: absolute;
// 			top: -60%;
// 			left: -40vw;
// 			z-index: 0;
// 			width: 50vw;
// 			height: 200%;
// 			transform: rotate(-12deg);
// 			background-color: ${(props) => props.theme.mainColor};
// 		}
		
// 		.img-box {
// 			width: 49vh;
// 			height: 65vh;
// 			margin: 5vh 0 0 30px;
// 			background-image: url(${(props) => props.theme.mainSrc});
// 			background-size: contain;
// 			background-repeat: no-repeat;
// 			background-position: top;
// 			border-radius: 15px;
// 			box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
// 			position: relative;
// 			z-index: 1;
// 		}
// 	}
	
// 	.right {
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: flex-start;
// 		padding: 0 10% 0 7%;
// 		color: #fff;
		
// 		.tit-wrap {
// 			margin-bottom: 60px;
			
// 			h2 {
// 				font-size: 22px;
// 			}
			
// 			h1 {
// 				margin-bottom: 20px;
// 				font-size: 45px;
// 				font-weight: bold;
// 				white-space: nowrap;
// 				overflow: hidden;
// 				position: relative;
// 				line-height: 1;

// 				.message {
// 					display: block;
// 					overflow: hidden;
// 					position: absolute;
// 					top: 0;
// 					left: 80px;
					
// 					strong {
// 						display: block;
// 						color: ${(props) => props.theme.mainColor};
// 						animation: ${messageslide} 8s ease-in-out infinite;
// 					}

// 					/* Add specific animation delays for each strong element */
// 					strong:nth-of-type(1) {
// 						animation-delay: 0s; /* First message */
// 					}
// 					strong:nth-of-type(2) {
// 						animation-delay: 4s; /* Second message */
// 					}
// 				}
// 			}
			
// 			p {
// 				font-size: 16px;
// 				line-height: 1.6;
// 				padding: 0 15% 0 0;
// 				max-width: 670px;
// 				word-break: keep-all;
// 			}
// 		}
		
// 		section {
// 			margin-bottom: 40px;
			
// 			h2 {
// 				margin-bottom: 20px;
// 				font-size: 26px;
// 				font-weight: 600;
// 			}
			
// 			ul {
// 				display: flex;
// 				flex-wrap: wrap;
// 				padding: 0;
// 				list-style: none;
				
// 				li {
// 					width: 50%;
// 					padding-bottom: 10px;
// 					font-size: 16px;
// 					font-weight: 500;
// 					color: ${(props) => props.theme.mainColor};
					
// 					span {
// 						font-weight: 400;
// 						opacity: 0.8;
// 						color: #fff;
// 					}
// 				}
// 			}
// 		}
		
// 		.more-btn {
// 			padding: 0 40px;
// 			border-radius: 26px;
// 			background-color: ${(props) => props.theme.mainColor};
// 			font-size: 15px;
// 			font-weight: 500;
// 			color: #fff;
// 			line-height: 46px;
// 			letter-spacing: 0.5px;
// 			text-decoration: none;
// 			display: inline-block;
// 			text-align: center;
// 		}
// 	}
	
// 	@media ${(props) => props.theme.laptop} {
// 		.left {
// 			.color-block {
// 				top: -60%;
// 				left: -25vw;
// 				width: 40vw;
// 				height: 200%;
// 				transform: rotate(-9deg);
// 			}
// 		}
		
// 		.right {
// 			padding-right: 5%;
			
// 			.tit-wrap {
// 				margin-bottom: 40px;
				
// 				h1 {
// 					margin-bottom: 10px;
// 					letter-spacing: -0.5px;
// 				}
// 			}
			
// 			section {
// 				h2 {
// 					margin-bottom: 10px;
// 				}
				
// 				ul {
// 					li {
// 						width: 100%;
// 					}
// 				}
// 			}
// 		}
// 	}
	
// 	@media ${(props) => props.theme.mobile} {
// 		flex-wrap: wrap;
		
// 		.left {
// 			flex: none;
// 			width: 100%;
// 			overflow: hidden;
			
// 			.color-block {
// 				left: -40vw;
// 				width: 80vw;
// 				min-width: 250px;
// 				transform: rotate(-12deg);
// 			}
			
// 			.img-box {
// 				width: 90vw;
// 				height: 55vh;
// 				margin: 3vh 5vw;
// 				background-position: center;
// 			}
// 		}
		
// 		.right {
// 			width: 100%;
// 			flex: none;
// 			margin: 5vh 0;
// 			padding-bottom: 5vh;
			
// 			.tit-wrap {
// 				h1 {
// 					font-size: 35px;
					
// 					.message {
// 						left: 60px;
// 						animation: ${messageslide} 8s ease-in-out infinite;
// 					}
// 				}
				
// 				h2 {
// 					font-size: 20px;
// 				}
				
// 				p {
// 					padding-right: 5%;
// 				}
// 			}
// 		}
// 	}
// `;
export default AboutTxtWrap;