import React from 'react';
import styled from 'styled-components';
import JS30Card from './JS30Card';


function Js30() {
  const colors = ["#00fffc", "#fc00ff", "#1dff00", "#f6ff00", "#00f6ff",
    "#ee00ff", "#ffbaba", "#b37aff",];
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <CardBody>
      <ItemText>
        <h1>JavaScript 30</h1>
        <p>Challenges from JS30 course (some challenges are done using only the console, so those haven't been uploaded, but you can still check them out in my repositories.)</p>
      </ItemText>
      <CardContainer>

        <JS30Card
          title="Drum Kit"
          description="A drum kit that plays sounds with keyboard."
          githubLink="https://github.com/Netsujr/JS1-DrumKit"
          websiteLink="https://netsujr.github.io/JS1-DrumKit/"
          faceTitle="JS1"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Clock"
          description="Real-time clock. Probably needs further styling."
          githubLink="https://github.com/Netsujr/JS2-Clock"
          websiteLink="https://netsujr.github.io/JS2-Clock/"
          faceTitle="JS2"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="CSS Variables"
          description="Playing with variables within CSS."
          githubLink="https://github.com/Netsujr/JS3-CSS_Variables"
          websiteLink="https://netsujr.github.io/JS3-CSS_Variables/"
          faceTitle="JS3"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Flex Panels"
          description="Where panels from this portfolio got inspiration!"
          githubLink="https://github.com/Netsujr/JS5-Flex_Panel_Gallery"
          websiteLink="https://netsujr.github.io/JS5-Flex_Panel_Gallery/"
          faceTitle="JS5"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Type Ahead"
          description="Predictive text, highlights and searches in real-time."
          githubLink="https://github.com/Netsujr/JS6-Type_Ahead"
          websiteLink="https://netsujr.github.io/JS6-Type_Ahead/"
          faceTitle="JS6"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="HTML Canvas"
          description="Draw to your heart's content."
          githubLink="https://github.com/Netsujr/JS8-HTML_Canvas"
          websiteLink="https://netsujr.github.io/JS8-HTML_Canvas/"
          faceTitle="JS8"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="CheckBoxes"
          description="Hold shift to check boxes in between two boxes."
          githubLink="https://github.com/Netsujr/JS10-Checkboxes"
          websiteLink="https://netsujr.github.io/JS10-Checkboxes/"
          faceTitle="JS10"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Video Player"
          description="Coding video controls, DOM manipulation."
          githubLink="https://github.com/Netsujr/JS11-Video_player"
          websiteLink="https://netsujr.github.io/JS11-Video_player/"
          faceTitle="JS11"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Local Storage"
          description="Testing user local storage & event delegation."
          githubLink="https://github.com/Netsujr/JS15-LocalStorage"
          websiteLink="https://netsujr.github.io/JS15-LocalStorage/"
          faceTitle="JS15"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Shadow Effect"
          description="Shadow effect on mouse move."
          githubLink="https://github.com/Netsujr/JS16-mouse_move_effect"
          websiteLink="https://netsujr.github.io/JS16-mouse_move_effect/"
          faceTitle="JS16"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Band Names"
          description="Sorting names bypassing A/An/The."
          githubLink="https://github.com/Netsujr/JS17-Sorting_band_names"
          websiteLink="https://netsujr.github.io/JS17-Sorting_band_names/"
          faceTitle="JS17"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Data-Time"
          description="Converting hrs/min to secs to add up a total time."
          githubLink="https://github.com/Netsujr/JS18-stringNames_reduce"
          websiteLink="https://netsujr.github.io/JS18-stringNames_reduce/"
          faceTitle="JS18"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Speech Detection"
          description="Pause speaking to create a new paragraph."
          githubLink="https://github.com/Netsujr/JS20-Speech_Detection"
          websiteLink="https://netsujr.github.io/JS20-Speech_Detection/"
          faceTitle="JS20"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Speech Synthesis"
          description="Type something and choose language."
          githubLink="https://github.com/Netsujr/JS23-Speech_synthesis"
          websiteLink="https://netsujr.github.io/JS23-Speech_synthesis/"
          faceTitle="JS23"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Sticky Nav"
          description="Dynamic sticky nav at top of page."
          githubLink="https://github.com/Netsujr/JS24-Sticky_Nav"
          websiteLink="https://netsujr.github.io/JS24-Sticky_Nav/"
          faceTitle="JS24"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Hover Nav Bar"
          description="Cool transitioning Nav that follows you."
          githubLink="https://github.com/Netsujr/JS26-Stripe_follow_Nav"
          websiteLink="https://netsujr.github.io/JS26-Stripe_follow_Nav/"
          faceTitle="JS26"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Click and Drag"
          description="Dynamic click and drag to move elements."
          githubLink="https://github.com/Netsujr/JS27-Click_and_Drag"
          websiteLink="https://netsujr.github.io/JS27-Click_and_Drag/"
          faceTitle="JS27"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Video Speed controller"
          description="Highlight then click on how fast video plays."
          githubLink="https://github.com/Netsujr/JS28-Video_speed_controller"
          websiteLink="https://netsujr.github.io/JS28-Video_speed_controller/"
          faceTitle="JS28"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="CountDown Clock"
          description="Feel free to use this for anything."
          githubLink="https://github.com/Netsujr/JS29-Countdown_Clock"
          websiteLink="https://netsujr.github.io/JS29-Countdown_Clock/"
          faceTitle="JS29"
          textColor={getRandomColor()}
        />

        <JS30Card
          title="Wack-a-mole"
          description="How many moles can you wack?"
          githubLink="https://github.com/Netsujr/JS30-Wack_a_mole"
          websiteLink="https://netsujr.github.io/JS30-Wack_a_mole/"
          faceTitle="JS30"
          textColor={getRandomColor()}
        />

      </CardContainer>
    </CardBody>
  );
}

export default Js30;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Righteous", cursive !important;
  min-height: 100vh;
  `;

const CardContainer = styled.div`
  max-width: 90vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1px;
  margin: 0 auto;
  padding: 30px 0;
  `;

const ItemText = styled.div`
  /* border: 2px solid orange; */
  width: 50vw;
  margin-top: 12vh;
  justify-content: center;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80vw;
  }

  h1{
    margin-top: -7px;
    @media (max-width : 768px) {
      font-size: 24px;
      margin-top: -4px;
    }
  }

  p {
    font-size: 16px;
  }
  `
