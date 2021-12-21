import React from 'react';
import styled from 'styled-components';
import logo from "../images/rdlogo.png";

function Header() {
  return (
    <Container>
      <a href="">
        <img src={logo} alt="" />
      </a>
      <Menu>
        <a href="#">Project 1</a>
        <a href="#">Project 2</a>
        <a href="#">Project 3</a>
        <a href="#">Project 4</a>
        <a href="#">Project 5</a>
      </Menu>
      <RightMenu>

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
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 10px;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  /* use this to stick the div to positions of the page  */

  & img {
    height: 60px;
  }
  `;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
    color: white;
  }
  `;

const RightMenu = styled.div`

  `;
