import React from 'react';
import tc1 from "../../../images/PersonalProjects/TeslaClone/one.png";
import tc2 from "../../../images/PersonalProjects/TeslaClone/two.png";
import tc3 from "../../../images/PersonalProjects/TeslaClone/three.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import ReduxIcon from "../../../images/Icons/redux-original.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import AllProjects from './AllProjects';

function TeslaClone({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="Tesla Clone |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="This was one of my first attempts at using React, I was practicing styling, components, routes, and using props. You'll notice that a lot of the primitive features from this Tesla clone site was used to build my portfolio! Of course with more advanced code."
      problems="A lot of the problems was in the back-end of the process, getting each section and buttons to be different even though I was re-using the same 'section' template. There was also a little trouble with the burger nav on the side."
      solutions="This is where props came in to save the day. It made perfect sense. Passing different props to each section to change elements while keeping the original skeleton. The burger nav was appearing in front of some sections but not others. A quick z-index refactor over the project, and it was ready to go!"
      img1={tc1}
      img2={tc2}
      img3={tc3}
      icon1={JavascriptIcon}
      icon2={ReactIcon}
      icon3={ReduxIcon}
      icon4={HTMLIcon}
      icon5={CSSIcon}

    />
  );
}

export default TeslaClone;
