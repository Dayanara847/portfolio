import * as React from "react";
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 14vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    height: 100vh;
    padding: 0;
  }
`
const Header = styled.h1`
  z-index: 2;
  font-size: 2.5vw;
  font-family: Arial;

  @media(max-width: 768px) {
    font-size: 5.5vw;
  }
`
const StyledGreatting = styled.span`
  font-size: 8vw;
  font-family: ArialicHollow;

  @media(max-width: 768px) {
    font-size: 14.5vw;
  }
`
const StyledText = styled.span`
  color: rgb(1, 180, 240);
  font-family: ArialicHollow;
`

// markup
const Home = () => {
  return (
    <MainContainer>
      <Header>
        <StyledGreatting>Hola!</StyledGreatting>
        <br/>
        me llamo Dayanara Maurin
        <br/>
        <StyledText>y soy Full Stack Web Developer</StyledText>
      </Header>
    </MainContainer>
  )
}

export default Home;