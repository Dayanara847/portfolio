import * as React from "react";
import Home from '../components/home';
import Projects from '../components/projects';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import bgSkyBlue from '../../public/bgSkyBlue.png';
import bgUpper from '../../public/background-upper.png';

import rock from '../images/rock.png';
import fallingDown from '../images/fallingDown.png';
import fallingDownTop from '../images/fallingDownTop.png';
import jumper from '../images/jumping.png';
import runner from '../images/running.png';
import sitting from '../images/sitting.png';

import AlexBrushRegular from '../fonts/AlexBrush-Regular.ttf';
import JosefinBold from '../fonts/JosefinSlab-Bold.ttf';
import PoorRichard from '../fonts/PoorRichard.otf'

// styles
const GlobalStyle = createGlobalStyle`
  html, body {
    display: flex;
    flex-direction: column;
    width: 1980px;
    margin: 0;
    overflow-x: hidden;
  }
	@font-face {
        font-family: AlexBrushRegular;
        src: url(${AlexBrushRegular});
    }
  @font-face {
    font-family: JosefinBold;
    src: url(${JosefinBold});
  }
  @font-face {
    font-family: PoorRichard;
    src: url(${PoorRichard});
  }
`
const Background = styled.div`
background: url(${bgSkyBlue});
background-size: contain;
height: 3520px;
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
top: 34.3vw;
left: -0.5vw;
width: 10vw;
transform: ${prop => `translateY(${-prop.offsetY / 30}rem)`};
`
const Runner = styled.img`
position: absolute;
top: 29.5vw;
left: 1vw;
width: 4vw;
display: ${prop => prop.offsetY < 150 ? 'inline' : 'none'};
transform: ${prop => `translate(${prop.offsetY / 50}rem, ${-prop.offsetY / 30}rem)`};
`
const Jumper = styled.img`
position: absolute;
top: 20vw;
left: 11vw;
width: 4vw;
display: ${prop => prop.offsetY < 150 ? 'none' : 'inline'};
`
const FallingDownTop = styled.img`
position: absolute;
top: 80vw;
left: 11vw;
width: 5vw;
display: ${prop => prop.offsetY < 350 ? 'none' : 'inline'};
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY]);

  return (
    <div>
    <title>Dayanara Maurin</title>
      <GlobalStyle />
      <Background
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      />
      <BackgroundUpper
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <Rock offsetY={offsetY} src={rock} alt="" />
      <Runner offsetY={offsetY} src={runner} alt="" />
      <Jumper offsetY={offsetY} src={jumper} alt="" />
      <FallingDownTop offsetY={offsetY} src={fallingDownTop} alt="" />
      <FallingDown offsetY={offsetY} src={fallingDown} alt="" />
      <Sitting offsetY={offsetY} src={sitting} alt="" />
      <Home />
      <Projects />
    </div>
  )
}

export default IndexPage;
