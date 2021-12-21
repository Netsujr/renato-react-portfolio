import React from 'react';
import styled from 'styled-components';
import logo from "../images/rdlogo.png";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <Container>
      <a href="">
        <img src={logo} alt="" />
      </a>
      <Menu>
        <a href="#">
          <span>Project 1</span>
        </a>
        <a href="#"><span>Project 2</span></a>
        <a href="#"><span>Project 3</span></a>
        <a href="#"><span>Project 4</span></a>
        <a href="#"><span>Project 5</span></a>
      </Menu>
      <RightMenu>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

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
    letter-spacing: 1.42px;
    position: relative;
    &:after {
      content: "";
      height: 1px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opactity: 0;
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
