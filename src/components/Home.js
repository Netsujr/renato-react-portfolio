import React from 'react';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import styled from 'styled-components';
import renato from '../images/renatobg.png';
import JavascriptIcon from "../images/Icons/javascript-plain.svg";
import ReactIcon from "../images/Icons/react-original.svg";
import FirebaseIcon from "../images/Icons/firebase-plain-wordmark.svg";
import HTMLIcon from "../images/Icons/html5-original.svg";
import CSSIcon from "../images/Icons/css3-original.svg";
import ReduxIcon from "../images/Icons/redux-original.svg";
import HerokuIcon from "../images/Icons/heroku-original-wordmark.svg";
import RubyIcon from "../images/Icons/ruby-original-wordmark.svg";
import RailsIcon from "../images/Icons/rails-plain-wordmark.svg";
import NodeIcon from "../images/Icons/nodejs-original.svg";




class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <Container>
        <ItemText>
          <h1>Renato Delboni || Web Developer</h1>
        </ItemText>
        <Panels>
          <Panel id="panel1">
            <p>Hey</p>
            <p>Let's</p>
            <p>Dance</p>
          </Panel>
          <Panel id="panel2">
            <p>Give</p>
            <p>Take</p>
            <p>Receive</p>
          </Panel>
          <Panel id="panel3">
            <p>Experience</p>
            <p>It</p>
            <p>Today</p>
          </Panel>
          <Panel id="panel4">
            <p>Give</p>
            <p>All</p>
            <p>You can</p>
          </Panel>
        </Panels>

      </Container >
    );
  }
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  border: 2px solid orange;
  object-fit: contain;
  `;

const Panels = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: flex;

  #panel1 {
    background-image: url("https://source.unsplash.com/gYl-UtwNg_I/1500x1500");
  }
  #panel2 {
    background-image: url("https://source.unsplash.com/rFKUFzjPYiQ/1500x1500");
  }
  #panel3 {
    background-image: url("https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d");
  }
  #panel4 {
    background-image: url("https://source.unsplash.com/ITjiVXcwVng/1500x1500");
  }
  `;

const Panel = styled.div`
  background: #6b0f9c;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
  flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  font-size: 20px;
  background-size: cover;
  background-position: center;
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  `;

const InfoContainer = styled.div`
  display: flex;
  `

const ItemText = styled.div`
  /* border: 2px solid orange; */
  width: 100vw;
  padding-top: 12vh;
  justify-content: center;
  text-align: center;
  color: black;
  display: flex;

  h1{
    margin-top: -7px;
    margin-right: 2px;
    @media (max-width : 768px) {
      font-size: 24px;
      margin-top: -4px;
    }
  }
  `
const ImgContainer = styled.div`
  border: 2px solid pink;
  width: 35vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  object-fit: contain;

  img {
    height: 100vh;
    position: absolute;
    bottom: 0px;
    left: 0px;

  }
  `;

const IconsContainer = styled.div`
  border: 2px solid blue;
  max-width: 100%;
  max-height: 100%;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  `;

const Icons = styled.img`
  /* border: 2px solid pink; */
  height: 35px;
  margin: 5px;
  @media (max-width : 768px) {
    height: 20px;
  }
  `;



// ----------------------------------------------------------------------------------------------------------------

{/* <Fade center>
    <IconsContainer>
    <Tada spy={this.state.counter}>
    <Icons src={JavascriptIcon} onClick={this.handleClick} />
    <Icons src={ReactIcon} />
    <Icons src={FirebaseIcon} />
    <Icons src={HTMLIcon} />
    <Icons src={CSSIcon} />
    <Icons src={NodeIcon} />
    <Icons src={RubyIcon} />
    <Icons src={RailsIcon} />
    <Icons src={ReduxIcon} />
    <Icons src={HerokuIcon} />
    </Tada>
    </IconsContainer>
    </Fade>

    <InfoContainer>
    <Fade left>
    <ImgContainer>
    <img src={renato} alt="" />
    </ImgContainer>
    </Fade>
    </InfoContainer>

  */}
