import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import data from "../../assets/data/portfoilodata";
import { Link } from "react-router-dom";

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
    const portfolioList = data.portfolioList.map((list, idx) => (
      <li key={idx} className="port-list">
        <Link to={`/projects/${list.name}`}>
          <div>
            {list.project === "Toy" && (
              <div className="toy">
                <img src="./images/toy.png" alt="Toy" />
              </div>
            )}

            <div className="info-wrap">
              <div className="txt-wrap">
                <div className="name">{list.name}</div>
                <span className="time">{list.period}</span>
                <p>
                  <span className="label">Description</span>
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
              <img src={`./images/logo/${list.logo}.png`} alt={`${list.name} Logo`} />
            </div>
          </div>
        </Link>
      </li>
    ));

    return (
      <StyledPortWrap className="container">
        <ul>{portfolioList}</ul>
      </StyledPortWrap>
    );
  }
}

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

const StyledPortWrap = styled.div`
  width: 85%;
  max-width: 1140px;
  margin: auto;
  padding-bottom: 80px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    list-style: none;

    > li {
      width: 32%;
      min-height: 320px;
      margin-bottom: 2%;
      position: relative;
      background-color: #191919;
      border-radius: 2px;
      overflow: hidden;
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

          .toy {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            color: ${(props) => props.theme.mainColor};
            
            img {
              width: 45px;
            }
          }

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
                font-size: 22px;
                line-height: 1.3;
                color: ${(props) => props.theme.mainColor};
              }
              .time {
                font-size: 14px;
              }
              p {
                padding: 10px 0;
                font-size: 14px;
                color: ${(props) => props.theme.textColor || "#fff"};
              }
            }

            .tech {
              ul {
                display: flex;
                flex-wrap: wrap;
                margin: 0;
                padding-top: 3px;

                li {
                  padding: 4px;
                  margin: 0 2px 5px;
                  border: 1px solid #fff;
                  border-radius: 2px;
                  font-size: 13px;
                  line-height: 1;
                }
              }
            }

            span.label {
              display: block;
              padding-bottom: 3px;
              font-size: 12px;
              font-weight: 500;
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
              padding: 3px;
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
        width: 49%;
        min-height: 260px;
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 80%;
    padding-bottom: 60px;

    > ul {
      .port-list {
        width: 100%;
        min-height: 220px;
        margin-bottom: 20px;

        .tech {
          display: none;
        }
      }
    }
  }
`;

export default PortfolioMain;
