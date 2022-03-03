import React from 'react';
import zc1 from "../../../images/PersonalProjects/zoomClone/one.png";
import zc2 from "../../../images/PersonalProjects/zoomClone/two.png";
import zc3 from "../../../images/PersonalProjects/zoomClone/three.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import ReduxIcon from "../../../images/Icons/redux-original.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import AllProjects from './AllProjects';

function zoomClone({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="Zoom Clone |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="This was my attempt at using React Native and creating a oom clone. Functionality includes a custom built API and ngrok for tunneling connectivity with other users."
      problems="The app works on mobile, however getting video from both sides of the connection was a different monster I didn't want to awaken yet. Some issues I had also included refactoring some code to work on different size phones. I know, very trivial, but this detail kept me debugging for a long time. I haven't deployed this app yet."
      solutions="I had a lot of fun using React Native and being able to design things straight on my phone. I decided to keep users to a maximum of 2 until I was able to figure out video visualization on both sides of the call (ongoing)."
      img1={zc1}
      img2={zc2}
      img3={zc3}
      icon1={JavascriptIcon}
      icon2={ReactIcon}
      icon3={ReduxIcon}
      icon4={HTMLIcon}
      icon5={CSSIcon}
    />
  );
}

export default zoomClone;
