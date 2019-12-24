import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-width: 400px;

  min-height: 400px;
  height: 90%;
  width: 80vw;
  max-width: 700px;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-evenly;
`;

const Container = props => {
  const [tabs] = useState([
    {
      name: "Home",
      picture:
        "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg",
      text:
        "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species."
    },
    {
      name: "Service",
      picture:
        "https://cdn.pixabay.com/photo/2019/03/20/20/38/television-4069510__340.jpg",
      text:
        "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing"
    },
    {
      name: "Contact",
      picture:
        "https://cdn.pixabay.com/photo/2018/11/29/23/34/cat-3846780_1280.jpg",
      text:
        "Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy. Chew iPad power cord steal the warm chair right after you get up for purr for no reason leave hair everywhere, decide to want nothing to do with my owner today."
    }
  ]);
  const [index, setIndex] = useState("Home");
  const currentTab = tabs.find(tab => tab.name === index);
  return (
    <StyledContainer>
      {props.children(tabs, index, setIndex, currentTab)}
    </StyledContainer>
  );
};

export default Container;
