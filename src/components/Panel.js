import React, {useEffect} from "react";
import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
     0% {
      /* transform: translate(-50%, -10px); */
opacity:0.1;
    }
    100% {
      /* transform: translate(0, 0); */
opacity:1;
    }
`
const StyledPanel = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 94%;
  border-radius: 0 0 5px 5px;
  height: calc(100% - 80px);
  margin-top: 30px;
  overflow: hidden;
p {
padding:8%;
font-size:1rem;
text-align:justify;
}
`;
const StyledImage = styled.img`
    height: 50%;
    animation: 1s ${slideIn};
`
export default ({ tab }) => {
useEffect(()=>{
  console.log(tab.text)
}, [tab])
  return (
    <StyledPanel >
      <StyledImage src={tab.picture} key={tab.picture} />
      <p>{tab.text}</p>
    </StyledPanel>
  );
  
}