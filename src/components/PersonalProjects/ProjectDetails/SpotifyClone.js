import React from 'react';
import sp1 from "../../../images/PersonalProjects/SpotifyClone/one.png";
import sp2 from "../../../images/PersonalProjects/SpotifyClone/two.png";
import sp3 from "../../../images/PersonalProjects/SpotifyClone/three.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import FirebaseIcon from "../../../images/Icons/firebase-plain-wordmark.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import AllProjects from './AllProjects';

function SpotifyClone({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="Spotify Clone |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="For this project I was again using a similar authentication login as I did with the Disney Clone project, however, this time I was calling Spotify's API to connect to user's info."
      problems="The point of the App was to be able to control your songs with basic functionality like changing to a next or previous song. I had a lot fun going deeper into Spotify's API capabilities. One little issue I had was matching the album cover to the current song playing, I used the index to find the correct cover."
      solutions="I'm still debugging this album/song issue. the rest of the app was really fun to build and get to actually work! Please share if you have any ideas!"
      img1={sp1}
      img2={sp2}
      img3={sp3}
      icon1={JavascriptIcon}
      icon2={ReactIcon}
      icon3={FirebaseIcon}
      icon4={HTMLIcon}
      icon5={CSSIcon}
    />
  );
}

export default SpotifyClone;
