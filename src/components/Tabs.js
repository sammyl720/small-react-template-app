import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
const StyledTabs = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
  background: rgba(211, 212, 222, .1);
  position: absolute;
  top: 0;
`;

const Tabs = ({ tabs, index, setIndex }) => {
  return (
    <StyledTabs>
      {tabs.map(tab => (
        <Tab onClick={() => setIndex(tab.name)} isActive={tab.name === index}>
          {tab.name}
        </Tab>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
