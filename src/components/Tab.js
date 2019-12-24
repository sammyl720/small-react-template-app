import React from "react";
import styled from "styled-components";

const StyledTab = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  border: 1px solid white;
  flex: 1;
  cursor:pointer;
  ${props => (props.isActive ? "border-bottom:3px solid black;background:white" : "")}
  transition:border-bottom 440ms;
`;

const Tab = props => {
  return (
    <StyledTab onClick={props.onClick} isActive={props.isActive}>
      {props.children}
    </StyledTab>
  );
};

export default Tab;
