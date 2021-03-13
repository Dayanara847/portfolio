import * as React from "react";
import Home from '../components/home';
import Projects from '../components/projects';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import bgUpper from '../../public/background-upper.png';
import bg from '../../public/background.png';
import rock from '../images/rock.png';
import fallingDown from '../images/fallingDown.png';
import fallingDownTop from '../images/fallingDownTop.png';
import jumper from '../images/jumping.png';
import runner from '../images/running.png';
import sitting from '../images/sitting.png';

// styles
const GlobalStyle = createGlobalStyle`
  html, body {
    display: flex;
    flex-direction: column;
    width: 1980px;
    margin: 0;
    overflow-x: hidden;
  }
`
const Background = styled.div`
background: url(${bg});
background-size: contain;
height: 4500px;
width: 1980px;
position: absolute;
box-sizing: border-box;
`
const BackgroundUpper = styled.div`
background: url(${bgUpper});
background-size: cover;
height: 2000px;
width: 1980px;
position: absolute;
box-sizing: border-box;
`
const Rock = styled.img`
position: absolute;
top: 33rem;
left: 0;
width: 10rem;
transform: ${prop => `translateY(${-prop.offsetY / 30}rem)`};
`
const Runner = styled.img`
position: absolute;
top: 28rem;
left: 1rem;
width: 4rem;
display: ${prop => prop.offsetY < 150 ? 'inline' : 'none'};
transform: ${prop => `translate(${prop.offsetY / 50}rem, ${-prop.offsetY / 30}rem)`};
`
const Jumper = styled.img`
position: absolute;
top: 18rem;
left: 11rem;
width: 4rem;
display: ${prop => prop.offsetY < 150 ? 'none' : 'inline'};
`
const FallingDownTop = styled.img`
position: absolute;
top: 70rem;
left: 11rem;
width: 5rem;
display: ${prop => prop.offsetY < 435 ? 'none' : 'inline'};
`
const FallingDown = styled.img`
position: absolute;
top: 140rem;
left: 11rem;
width: 5rem;
display: ${prop => prop.offsetY < 1400 ? 'none' : 'inline'};
`
const Sitting = styled.img`
position: absolute;
top: 198rem;
left: 11rem;
width: 5rem;
display: ${prop => prop.offsetY < 2400 ? 'none' : 'inline'};
`

const IndexPage = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log('offsetY', offsetY);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY]);

  return (
    <div>
    <title>Dayanara Maurin</title>
      <GlobalStyle />
      <Background
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <BackgroundUpper
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <Rock offsetY={offsetY} src={rock} />
      <Runner offsetY={offsetY} src={runner} />
      <Jumper offsetY={offsetY} src={jumper} />
      <FallingDownTop offsetY={offsetY} src={fallingDownTop} />
      <FallingDown offsetY={offsetY} src={fallingDown} />
      <Sitting offsetY={offsetY} src={sitting} />
      <Home />
      <Projects />
    </div>
  )
}

export default IndexPage;
