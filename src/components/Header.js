import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import GithubIcon from "../images/Icons/github-original.svg";
import LinkedinIcon from "../images/Icons/linkedin-original.svg";
import HomeIcon from "../images/Icons/icons8-home.svg";


function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);


  return (
    <Container>
      <LeftIcons>
        <a href="/"><img src={HomeIcon} alt="" /></a>
      </LeftIcons>
      <Menu>
        <a href="/aboutme"><span>About Me</span></a>
        <a href="/projects"><span>Projects</span></a>
        <a href="/mini-projects"><span id="mp" >Mini Projects</span></a>
        <a href="/javascript30"><span>Javascript 30</span></a>
      </Menu>
      <RightMenu>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <a href="/"><li>Home</li></a>
        <a href="/aboutme"><li>About Me</li></a>
        <a href="/projects"><li>Projects</li></a>
        <a href="/mini-projects"><li>Mini Projects</li></a>
        <a href="/javascript30"><li>Javascript 30</li></a>
        <RightIcons>
          <a href="https://github.com/netsujr" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/delbonirenato/" target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} alt="Linkedin" />
          </a>
        </RightIcons>
        {/* <li><a href="#"></a>Mini Projects</li> */}
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: rgba(169, 225, 255, 1);
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 10px;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  /* use this to stick the div to positions of the page  */

  img {
    height: 60px;

  }

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
    color: black;

    span {
      font-size: 13px;
      letter-spacing: 0.4px;
      position: relative;

      &:after {
        content: "";
        height: 1px;
        background: black;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);

      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  `;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;

  @media(max-width: 768px) {
    display: none;
  }

  a{

    #latest {
      position: relative
    }

    img {
      position: absolute;
      height: 30px;
      left: -15px;
      top: -15px;
      transform: rotate(-90deg);
      object-fit: contain;
    }
  }

  `;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
  `;

const CustomMenu = styled(MenuIcon)`
  color: black;
  `;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: white;
  z-index: 3;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 250ms ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    color: black;
    font-weight: 200;

    &:hover {
      font-weight: 500;
      letter-spacing: 1px;
    }

    a {
      font-weight: 600;
    }
  }
  `;

const CustomClose = styled(CloseIcon)`
  color: black;
  cursor: pointer;
  `;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  `;

const RightIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  img {
    height: 40px;
    /* border-radius: 5px; */
    padding: 2px;

    &:hover {
      height: 42px;
    }
  }
  `;

const LeftIcons = styled.div`
  display: flex;

  img {
    height: 30px;

    border-radius: 5px;
    padding: 2px;
  }
  `;
