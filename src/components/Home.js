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
        <InfoContainer>
          <Fade left>
            <ImgContainer>
              <img src={renato} alt="" />
            </ImgContainer>
          </Fade>
          <Fade center>
            <DetailsContainer>
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
            </DetailsContainer>
          </Fade>
        </InfoContainer>
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

const DetailsContainer = styled.div`
  border: 2px solid blue;
  width: 64vw;
  height: 100vh;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  `;

const Icons = styled.img`
  /* border: 2px solid pink; */
  height: 55px;
  margin: 5px;
  @media (max-width : 768px) {
    height: 20px;
  }
  `;
