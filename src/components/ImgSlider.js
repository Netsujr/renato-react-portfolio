import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../images/spotify.png";


const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };


  return (
    <Carousel {...settings} >
      <Wrap>
        <img src={image} alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/largebg.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-sctive button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
  .slick-dots li.slick-active button:before {
    color: rgba(0, 233, 255, 0.6);
    font-size: 13px;
  }
  `
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 50px;
    height: 50px;
    transition-duration: 300ms;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
  `
