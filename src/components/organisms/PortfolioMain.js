import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import data from "../../assets/data/portfoilodata";
import { Link } from "react-router-dom";
import defaultLogo from "../../assets/images/JAVA.png"; // Import a default image if needed

// PortfolioItem 컴포넌트 정의
const PortfolioItem = ({ list }) => {
  let logoImage;
  try {
    logoImage = require(`../../assets/images/${list.logo}.png`);
  } catch (e) {
    logoImage = defaultLogo;
  }

  return (
    <li className="port-list">
      <Link to={`/projects/${list.name}`}>
        <div>
          <div className="info-wrap">
            <div className="txt-wrap">
              <div className="name">{list.name}</div>
              <span className="time">{list.period}</span>
              <p>
                <span className="label">Description</span><br/>
                {list.description}
              </p>
            </div>
            <div className="tech">
              <span className="label">Tech Stack</span>
              <ul>
                {list.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="logoWrap">
          <div className="logo">
            <img src={logoImage} alt={`${list.name} Logo`} />
          </div>
        </div>
      </Link>
    </li>
  );
};

// PortfolioMain 컴포넌트 정의
class PortfolioMain extends Component {
  componentDidMount() {
    const nodes = Array.from(document.querySelectorAll(".port-list"));
    const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
    const classNames = ["in", "out"]
      .flatMap(p => Object.values(directions).map(d => `${p}-${d}`));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = l - (width / 2) * (width > height ? height / width : 1);
      const y = t - (height / 2) * (height > width ? width / height : 1);
      return Math.round(Math.atan2(y, x) / Math.PI * 2 + 5) % 4;
    };

    class Item {
      constructor(element) {
        this.element = element;
        this.element.addEventListener("mouseover", this.handleMouseOver);
        this.element.addEventListener("mouseout", this.handleMouseOut);
      }

      handleMouseOver = (ev) => this.update(ev, "in");
      handleMouseOut = (ev) => this.update(ev, "out");

      update(ev, prefix) {
        this.element.classList.remove(...classNames);
        this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
      }

      destroy() {
        this.element.removeEventListener("mouseover", this.handleMouseOver);
        this.element.removeEventListener("mouseout", this.handleMouseOut);
      }
    }

    this.items = nodes.map(node => new Item(node));
  }

  componentWillUnmount() {
    this.items.forEach(item => item.destroy());
  }

  render() {
    return (
      <StyledPortWrap className="container">
        <ul>
          {data.portfolioList.map((list, idx) => (
            <PortfolioItem key={idx} list={list} />
          ))}
        </ul>
      </StyledPortWrap>
    );
  }
}

// 애니메이션 정의
const slideIn = (direction) => keyframes`
  from {
    top: ${direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0"};
    left: ${direction === "left" ? "-100%" : direction === "right" ? "100%" : "0"};
    opacity: 0;
  }
  to {
    top: 0;
    left: 0;
    opacity: 1;
  }
`;

const slideOut = (direction) => keyframes`
  from {
    top: 0;
    left: 0;
    opacity: 1;
  }
  to {
    top: ${direction === "top" ? "-100%" : direction === "bottom" ? "100%" : "0"};
    left: ${direction === "left" ? "-100%" : direction === "right" ? "100%" : "0"};
    opacity: 0;
  }
`;

// 스타일 컴포넌트 정의
const StyledPortWrap = styled.div`
  width: 85%;
  max-width: 1140px;
  margin: auto;
  padding-bottom: 80px;

  section {
  max-width: 1140px;
  margin: auto;
  padding-bottom: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    list-style: none;

    > li {
      width: 48%;  // Adjust width to fit your layout
      min-height: 500px;  // Increased min-height for vertical expansion
      margin-bottom: 2%;
      position: relative;
      background-color: #191919;
      border-radius: 2px;
      overflow: hidden;  // Ensure content doesn't overflow out of the item
      cursor: pointer;
      transition: transform 300ms ease;

      a {
        width: 100%;
        height: 100%;
        display: block;
        text-decoration: none;

        > div {
          height: 100%;
          padding: 20px;
          pointer-events: none;

          .info-wrap {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .txt-wrap {
              .name {
                font-weight: 500;
                font-size: 24px;  // Increase font size
                line-height: 1.3;
                color: ${(props) => props.theme.mainColor};
              }
              .time {
                font-size: 16px;  // Increase font size
              }
              p {
                padding: 15px 0;  // Increase padding
                font-size: 16px;  // Increase font size
                color: ${(props) => props.theme.textColor || "#fff"};
              }
            }

            .tech {
              display: flex;
              flex-direction: column;  // Stack tech items vertically
              flex: 1;  // Allow the tech section to grow and fit
              margin-top: 20px;  // Add some space above tech section

              span.label {
                display: block;
                padding-bottom: 5px;  // Increase padding
                font-size: 14px;  // Increase font size
                font-weight: 500;
              }

              ul {
                display: flex;
                flex-wrap: wrap;  // Wrap tech items to the next line if needed
                margin: 0;
                padding: 0;
                list-style: none;  // Remove default list styles

                li {
                  padding: 6px;  // Adjust padding
                  margin: 0 4px 6px;  // Adjust margin
                  border: 1px solid #fff;
                  border-radius: 2px;
                  font-size: 14px;  // Increase font size
                  line-height: 1;
                }
              }
            }
          }
        }

        .logoWrap {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: rgba(255, 180, 0, 0.92);

          .logo {
            img {
              border-radius: 1px;
              padding: 5px;  // Adjust padding if needed
              width: 80px;  // Adjust logo image size if needed
            }
          }
        }
      }

      &.in-top .logoWrap {
        animation: ${slideIn("top")} 300ms ease-out forwards;
      }
      &.out-top .logoWrap {
        animation: ${slideOut("top")} 300ms ease-in forwards;
      }
      &.in-right .logoWrap {
        animation: ${slideIn("right")} 300ms ease-out forwards;
      }
      &.out-right .logoWrap {
        animation: ${slideOut("right")} 300ms ease-in forwards;
      }
      &.in-bottom .logoWrap {
        animation: ${slideIn("bottom")} 300ms ease-out forwards;
      }
      &.out-bottom .logoWrap {
        animation: ${slideOut("bottom")} 300ms ease-in forwards;
      }
      &.in-left .logoWrap {
        animation: ${slideIn("left")} 300ms ease-out forwards;
      }
      &.out-left .logoWrap {
        animation: ${slideOut("left")} 300ms ease-in forwards;
      }
    }
  }

  @media ${(props) => props.theme.laptop} {
    > ul {
      .port-list {
        width: 49%;  // Adjust width for laptop screens
        min-height: 400px;  // Adjust min-height for laptop screens
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 90%;
    padding-bottom: 60px;

    > ul {
      .port-list {
        width: 100%;
        min-height: 300px;  // Increase min-height for mobile screens
        margin-bottom: 20px;

        .tech {
          display: none;  // Hide tech stack on mobile if needed
        }
      }
    }
  }
`;

export default PortfolioMain;
