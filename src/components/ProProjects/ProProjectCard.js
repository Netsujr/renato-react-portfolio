import React from 'react';
import styled from 'styled-components';

const ProProjectCard = ({ title, description, siteLink, GhLink, path, image }) => {
  return (
    <a href={`/pro-projects/${path}`} id="link">
      <CardBody>
        <img id="image" src={image} alt="redux store" />
        <CardInfoContainer>
          <CardTitle>
            <h2>{title}</h2>
          </CardTitle>
          <CardDesc>
            <p>{description}</p>
          </CardDesc>
        </CardInfoContainer>
      </CardBody>
    </a>
  );
};

export default ProProjectCard;

const CardBody = styled.div`
  border: 2px solid rgba(83, 83, 83, 0.3);
  max-width: 25vw;
  min-height: 75vh;
  /* margin: 20px; */
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
  width: 95%;
  min-height: 80%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  z-index: 0;
  @media (max-width : 768px) {
    width: 200px;
    height: 100px;
    margin-right: 0;
  }
}

  @media (max-width : 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    max-height: 100%;
  }

  &:hover {
    #icon, #link, #website {
      opacity: 1;
    }
    border: 2px solid rgba(83, 83, 83, 0.6);
  }

  &:hover {
    background-color: rgba(204, 243, 255, 0.2);
  }
  `;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  `;

const CardTitle = styled.div`
  margin-bottom: 2px;
  `;

const CardDesc = styled.div`

  p {
    text-align: start;
    padding: 0px 10px;
    font-size: 16px !important;
    margin-top: 10px;
    @media (max-width : 768px) {
      font-size: 12px !important;
    }
  }

  `;
