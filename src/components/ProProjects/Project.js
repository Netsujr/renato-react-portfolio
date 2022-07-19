import React from 'react';
import styled from 'styled-components';
import ReduxFilm from "../../images/PersonalProjects/Redux-film/one.png";
import ProProjectCard from './ProProjectCard';


function Projects() {
  return (
    <Wrap>
      <ItemText>
        <h1>Professional Projects</h1>
      </ItemText>
      <Cards>

        <ProProjectCard
          title="React Film List"
          description="An App created using React and Redux. It allows the user to search for movies and tv-shows."
          path="redux-film"
          image={ReduxFilm}
        />

        <ProProjectCard
          title="React Film List"
          description="An App created using React and Redux. It allows the user to search for movies and tv-shows."
          path="redux-film"
          image={ReduxFilm}
        />

        <ProProjectCard
          title="React Film List"
          description="An App created using React and Redux. It allows the user to search for movies and tv-shows."
          path="redux-film"
          image={ReduxFilm}
        />

      </Cards>
    </Wrap>
  );
}

export default Projects;

const Cards = styled.div`
  /* border: 1px solid orange; */
  min-width: 90vw;
  min-height: 30vh;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  `;

const Wrap = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(248, 241, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width : 490px) {
    overflow-x: hidden;
  }
  `;

const ItemText = styled.div`
  /* border: 2px solid orange; */
  width: 100vw;
  padding-top: 12vh;
  justify-content: center;
  text-align: center;
  color: black;
  display: flex;

  h1{
    margin-top: -7px;
    margin-right: 2px;
    @media (max-width : 768px) {
      font-size: 24px;
      margin-top: -4px;
    }
  }
  `
