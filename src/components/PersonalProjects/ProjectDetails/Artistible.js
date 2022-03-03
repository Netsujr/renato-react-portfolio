import React from 'react';
import ar1 from "../../../images/PersonalProjects/Artistible/one.png";
import ar2 from "../../../images/PersonalProjects/Artistible/two.png";
import ar3 from "../../../images/PersonalProjects/Artistible/three.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import RubyIcon from "../../../images/Icons/ruby-original-wordmark.svg";
import RailsIcon from "../../../images/Icons/rails-plain-wordmark.svg";
import AllProjects from './AllProjects';

function Artistable({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="Artistible |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="A group project where I was in charge of the layout, design and structure of the website. So mainly on the front-end of things."
      problems="Getting realistic seeds in order to properly use the website was a little tricky. This site was built in two days, so there a still a little bugs that need to be squashed, like some artists don't have any ratings or reviews yet."
      solutions="The answer is to mess around with the seeds and apply missing components to the artist's profile. The main structure is there, with real users the information would be displayed much nicer!"
      img1={ar1}
      img2={ar2}
      img3={ar3}
      icon1={JavascriptIcon}
      icon2={HTMLIcon}
      icon3={CSSIcon}
      icon4={RubyIcon}
      icon5={RailsIcon}
    />
  );
}

export default Artistable;
