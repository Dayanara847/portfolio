import * as React from "react";
import styled from 'styled-components';

// styles
const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22vw 0;
`
const Header = styled.h1`
  z-index: 2;
  color: white;
  font-size: 2.5vw;
  font-family: Arial;
`
const StyledText = styled.span`
  color: palevioletred;
`

// markup
const Home = () => {
  return (
    <MainContainer>
      <Header>
        Hola! mi nombre es Dayanara Maurin,
        <br/>
        <StyledText>soy Full Stack Web Developer</StyledText>
      </Header>
    </MainContainer>
  )
}

export default Home;