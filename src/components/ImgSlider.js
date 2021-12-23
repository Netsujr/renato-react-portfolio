import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImgSlider = ({ FirstImg, SecondImg, ThirdImg }) => {
  // { projectImgs }
  // projectImgs is a placeholder
  let settings = {
    dots: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };


  return (
    <Carousel {...settings} >
      <Wrap>
        <img src={FirstImg} alt="" />
      </Wrap>
      <Wrap>
        <img src={SecondImg} alt="" />
      </Wrap>
      <Wrap>
        <img src={ThirdImg} alt="" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  /* border: 6px solid pink; */
  /* margin-bottom: 10px; */
  width: 80%;
  height: 70%;
  /* object-fit: contain; */
  /* overflow: hidden; */
  justify-content: center;
  align-items: center;
  @media (max-width : 768px) {
    justify-content: center;
    align-items: center;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
      position: absolute;
      top: 6px;
    }
  }
  li.slick-sctive button:before {
    color: white;
    position: absolute;
    top: 6px;
  }
  /* .slick-list {
    overflow: hidden;
  } */
  button {
    z-index: 1;
    position: absolute;
    top: 50%;
     @media (max-width : 768px) {
     top: 70%;
  }
}
  .slick-dots li.slick-active button:before {
    color: black;
    font-size: 13px;
    position: absolute;
    @media (max-width : 768px) {
    top: 6px;
  }
}
  `
const Wrap = styled.div`
  border: 4px solid transparent;
  /* cursor: pointer; */
  img {
    /* border: 4px solid yellow; */
    border-radius: 4px;
    width: 100%;
    height: 50vh;
    position: relative;
    object-fit: contain;
    transition-duration: 300ms;
    /* box-shadow: rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
    @media (max-width : 768px) {
      width: 100%;
      height: 30vh;
    }
  }
}`
