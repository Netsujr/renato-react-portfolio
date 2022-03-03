import React from 'react';
import ml1 from "../../../images/PersonalProjects/MovieList/one.png";
import ml2 from "../../../images/PersonalProjects/MovieList/two.png";
import ml3 from "../../../images/PersonalProjects/MovieList/three.png";
import HTMLIcon from "../../../images/Icons/html5-original.svg";
import RubyIcon from "../../../images/Icons/ruby-original-wordmark.svg";
import RailsIcon from "../../../images/Icons/rails-plain-wordmark.svg";
import CSSIcon from "../../../images/Icons/css3-original.svg";
import AllProjects from './AllProjects';

function MovieList({ leftBtnText, rightBtnText }) {
  return (
    <AllProjects
      title="MovieList |  "
      leftBtnText={leftBtnText}
      rightBtnText={rightBtnText}
      role="A quick site made in a few hours using  a movie API and cloudinary. I was in charge of all the coding for this one."
      problems="There were quite a few issues when creating and deleting lists and movies. Alot of the issues stemmed form blocks of code being called in the wrong places."
      solutions="Although this project came early in my coding journey, it gave me alot of insight into debugging and finding where the root of the issue is and following the thread to find the actual error. Its still not perfect by any means, but it functions for creating/deleting lists of your favorite movies."
      img1={ml1}
      img2={ml2}
      img3={ml3}
      icon1={HTMLIcon}
      icon2={CSSIcon}
      icon3={RubyIcon}
      icon4={RailsIcon}
    />
  );
}

export default MovieList;
