import React from 'react';
import wa1 from "../../../images/PersonalProjects/WhatsappClone/wa1.png";
import wa2 from "../../../images/PersonalProjects/WhatsappClone/wa2.png";
import wa3 from "../../../images/PersonalProjects/WhatsappClone/wa3.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import FirebaseIcon from "../../../images/Icons/firebase-plain-wordmark.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import ReduxIcon from "../../../images/Icons/redux-original.svg";
import AllProjects from './AllProjects';

function WhatsappClone({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="WhatsApp Clone |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="For this project I was again using a similar authentication login as I did with the SpotifyClone project, however, this time, I did not add a user token to keep them logged in, With the intent that, if the screen is closed, the user has to sign in again (privacy)."
      problems="The point of the App was to be able to dynamically pull and push messages and chat-rooms to the database (firebase) in real-time. I was able to achieve this, However, users are only able to connect to you if they are connected to the same server."
      solutions="For now the app works as I want it to, in the future I could add the functionality of connecting between users. Deployed using Firebase, it was much easier this time around."
      img1={wa1}
      img2={wa2}
      img3={wa3}
      icon1={JavascriptIcon}
      icon2={ReactIcon}
      icon3={FirebaseIcon}
      icon4={HTMLIcon}
      icon5={CSSIcon}
      icon6={ReduxIcon}

    />
  );
}

export default WhatsappClone;
