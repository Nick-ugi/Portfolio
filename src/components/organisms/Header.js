import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// 애니메이션 정의
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Header = (props) => {
	const [Load, setLoad] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate(); // useNavigate hook for navigation

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 700);
		return () => setLoad(false);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleNavigation = (path) => {
		scrollToTop(); // Scroll to the top
		navigate(path); // Navigate to the path
	};

	return (
		<StyledHeader className={`${Load ? "on" : ""}`}>
			<div className="mobile-menu-icon" onClick={toggleMenu}>
				<i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
			</div>
			<ul className={`${isMenuOpen ? "open" : ""}`}>
				<li className={props.page === "home" ? "active" : ""}>
					<Link to="/" onClick={() => handleNavigation('/')}>
						<i className="fas fa-home"></i>
						<span>Home</span>
					</Link>
				</li>
				<li className={props.page === "about" ? "active" : ""}>
					<Link to="/about" onClick={() => handleNavigation('/about')}>
						<i className="fas fa-user"></i>
						<span>About</span>
					</Link>
				</li>
				<li className={props.page === "projects" ? "active" : ""}>
					<Link to="/projects" onClick={() => handleNavigation('/projects')}>
						<i className="fas fa-tasks"></i>
						<span>Projects</span>
					</Link>
				</li>
				<li className={props.page === "blog" ? "active" : ""}>
					<a
						href="https://second-mapusaurus-b0e.notion.site/9f5fe7c8d4d14e0585aa10185543efbd"
						target="_blank"
						rel="noopener noreferrer"
						onClick={scrollToTop} // Ensure scroll to top when opening external links
					>
						<i className="fas fa-book"></i>
						<span>Blog</span>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/Nick-ugi"
						target="_blank"
						rel="noopener noreferrer"
						onClick={scrollToTop} // Ensure scroll to top when opening external links
					>
						<i className="fab fa-github"></i>
						<span>Github</span>
					</a>
				</li>
			</ul>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
  position: fixed;
  right: 20px;
  top: 60px;
  bottom: 0;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.85s ease-in-out;

  &.on {
    top: 0;
    opacity: 1;
  }

  .mobile-menu-icon {
    display: none;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    z-index: 101;
    direction: rtl;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    @media ${(props) => props.theme.mobile} {
      display: none;
      &.open {
        display: flex;
        animation: ${slideIn} 0.5s ease-out forwards;
      }
    }

    li {
      position: relative;
      margin: 0 0 20px;

      &:last-child {
        margin-bottom: 0;
      }

      &.active {
        a {
          background-color: ${(props) => props.theme.mainColor};
          color: #fff;
          width: auto;
          padding: 13px 14px;
          i {
            opacity: 1;
          }
          span {
            opacity: 1;
            padding-left: 10px;
          }
        }
      }

      &:hover {
        a {
          background-color: ${(props) => props.theme.mainColor};
          width: auto;
          padding: 13px 14px;
          i {
            opacity: 1;
          }
          span {
            opacity: 1;
            padding-left: 10px;
          }
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 13px 14px;
        border-radius: 30px;
        background: #2b2a2a;
        color: transparent;
        text-decoration: none;
        width: 50px;
        overflow: hidden;
        transition: all 0.3s ease;
        i {
          width: 25px;
          height: 25px;
          font-size: 20px;
          text-align: center;
          line-height: 25px;
          color: #fff;
          transition: opacity 0.3s ease;
        }
        span {
          opacity: 0;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          transition: opacity 0.3s ease, padding-left 0.3s ease;
          padding-left: 0;
          white-space: nowrap;
        }
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    right: 10px;
    top: 10px;

    .mobile-menu-icon {
      display: block;
    }
  }
`;

export default Header;
