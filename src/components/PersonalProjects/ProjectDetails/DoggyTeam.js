import React from 'react';
import dt1 from "../../../images/PersonalProjects/DoggyTeam/one.png";
import dt2 from "../../../images/PersonalProjects/DoggyTeam/two.png";
import dt3 from "../../../images/PersonalProjects/DoggyTeam/three.png";
import JavascriptIcon from "../../../images/Icons/javascript-plain.svg";
import ReactIcon from "../../../images/Icons/react-original.svg";
import ReduxIcon from "../../../images/Icons/redux-original.svg";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import AllProjects from './AllProjects';

function DoggyTeam({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="Doggy Team |  "
      role="For this project, I wanted to practice CRUD using Reactjs.
    I also used react-dom, APIs, Cloudinary, GlobalContext and a few other features which need to be upgraded.
    I'm in the process of improving the styling in general and refactoring some code to make GET requests a little faster."
      problems="I had a few issues during production. There was an issue with the edit/update functionalities due to updated of React syntax.
    I had to use the useParams hook in order to pull the ID of my objects. It took me a while to wrap my head around how to use it (reading the documentation helped), but
    it made more sense once it was implemented."
      solutions="As always, I should have gone straight to the documentation for the hook. I asked for some help from my peers and they were able to help me debug and implement the hook without breaking the rest of my code."
      img1={dt1}
      img2={dt2}
      img3={dt3}
      icon1={JavascriptIcon}
      icon2={ReactIcon}
      icon3={ReduxIcon}
      icon4={HTMLIcon}
      icon5={CSSIcon}
    />
  );
}

export default DoggyTeam;
