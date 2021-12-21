import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../images/rdlogo.png";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import { selectProjects } from "../features/project/projectSlice";
// import { useSelector } from 'react-redux';


function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  // const projects = useSelector(selectProjects);

  return (
    <Container>
      <a href="">
        <img src={logo} alt="" />
      </a>
      <Menu>
        <a href="#"><span>Project 1</span></a>
        <a href="#"><span>Project 2</span></a>
        <a href="#"><span>Project 3</span></a>
        <a href="#"><span>Project 4</span></a>
        <a href="#"><span>Project 5</span></a>
      </Menu>
      <RightMenu>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href="#"></a>About Me</li>
        <li><a href="#"></a>Project 1</li>
        <li><a href="#"></a>Project 2</li>
        <li><a href="#"></a>Project 3</li>
        <li><a href="#"></a>Project 4</li>
      </BurgerNav>
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
  /* justify-content: flex-start; */
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
