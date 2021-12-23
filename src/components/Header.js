import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import GithubIcon from "../images/Icons/github-original.svg";
import LinkedinIcon from "../images/Icons/linkedin-original.svg";


function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);


  return (
    <Container>
      <HeaderIcons>
        <a href="https://github.com/netsujr" target="_blank">
          <img src={GithubIcon} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/delbonirenato/" target="_blank">
          <img src={LinkedinIcon} alt="Linkedin" />
        </a>
      </HeaderIcons>
      <Menu>
        <a href="/"><span>Home</span></a>
        <a href="/disney"><span>Disney Clone</span></a>
        <a href="/spotify"><span>Spotify Clone</span></a>
        <a href="/artistible"><span>Artistible</span></a>
        <a href="/tesla"><span>Tesla Clone</span></a>
        <a href="/movielist"><span>Movie List</span></a>
        <a href="/tinyme"><span>TinyMe</span></a>
        <a href="/zoom"><span>Zoom CLone</span></a>
        {/* <a href="#"><span>Mini Projects</span></a> */}
      </Menu>
      <RightMenu>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li><a href="/"></a>Home</li>
        <li><a href="/disney"></a>Disney Clone</li>
        <li><a href="/spotify"></a>Spotify Clone</li>
        <li><a href="/artistible"></a>Artistible</li>
        <li><a href="/tesla"></a>Tesla Clone</li>
        <li><a href="/movielist"></a>Movie List</li>
        <li><a href="/tinyme"></a>TinyMe</li>
        <li><a href="/zoom"></a>Zoom CLone</li>
        <li><a href="/miniprojects"></a>Mini Projects</li>
        {/* <li><a href="#"></a>Mini Projects</li> */}
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: black;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 10px;
  z-index: 1;
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
    color: white;

    span {
      font-size: 13px;
      letter-spacing: 0.4px;
      position: relative;
      &:after {
        content: "";
        height: 1px;
        background: white;
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

  `;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  `;

const CustomMenu = styled(MenuIcon)`
  color: white;
  `;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
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

const HeaderIcons = styled.div`
  display: flex;

  img {
    height: 30px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
  }
  `;

const Disney = styled.div`

  `;
