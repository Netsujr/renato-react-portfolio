import React from 'react';
import rf1 from "../../../images/PersonalProjects/Redux-film/one.png";
import rf2 from "../../../images/PersonalProjects/Redux-film/two.png";
import rf3 from "../../../images/PersonalProjects/Redux-film/three.png";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import ReduxIcon from "../../../images/Icons/redux-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import AllProjects from './AllProjects';

function ReduxMovieList({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="React MovieList |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="A site made using React using Redux and Redux-toolkit. It is a movie list app that allows the user to search for movies and add them to their list."
      problems="Trying to use redux's state management was a little tricky. I had to use a lot of middleware and async functions to make sure that the state was updated correctly. Also experimenting with Slice was a good learning experience."
      solutions="I looked up many solutions on Youtube and documentation to help me with this project. I am getting a lot more familiar with Redux the more I use it, but there are still some things I'm trying to figure out."
      img1={rf1}
      img2={rf2}
      img3={rf3}
      icon1={HTMLIcon}
      icon2={CSSIcon}
      icon3={JavascriptIcon}
      icon4={ReactIcon}
      icon5={ReduxIcon}
    />
  );
}

export default ReduxMovieList;
