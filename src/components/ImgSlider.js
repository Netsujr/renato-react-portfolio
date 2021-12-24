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
  width: 95%;
  height: 70%;
  justify-content: center;
  align-items: center;
  @media (max-width : 768px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top: -20px;
    width: 65%;
  }

  ul li button {
    &:before {
      font-size: 10px;
      position: absolute;
      @media (max-width : 768px) {
        top: 20px;
        left: -24px;
      }
    }
  }
  li.slick-sctive button:before {
    color: black;
    position: absolute;
    top: 20px;
    left: -24px;
  }

  button {
    z-index: 1;
    /* border: 4px solid green; */
    position: absolute;
    top: 50%;
    /* background-color: black; */
    @media (max-width : 768px) {
      top: 70%;
      margin: 0px 25px;
    }
  }

  button.slick-arrow.slick-prev::before, button.slick-arrow.slick-next::before {
      color: black;
    }
  .slick-dots li.slick-active button:before {
    color: black;
    font-size: 13px;
    position: absolute;
    @media (max-width : 768px) {
      top: 20px;
      left: -24px;
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
