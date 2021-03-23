import * as React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// components
import Home from '../components/home';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Tecnologies from '../components/tecnologies';
import Women from '../components/women';

// backgrounds
import bgSkyBlue from '../../public/bgSkyBlue.png';
import bgUpper from '../../public/background-upper.png';

// fonts
import AlexBrushRegular from '../fonts/AlexBrush-Regular.ttf';
import JosefinBold from '../fonts/JosefinSlab-Bold.ttf';
import PoorRichard from '../fonts/PoorRichard.otf';
import Corbel from '../fonts/corbel.ttf';
import TwCenMt from '../fonts/tw-cen-mt.ttf';
import GillSansUltraBold from '../fonts/gill-sans-ultra-bold.ttf';
import Dubai from '../fonts/dubai.ttf';
import MicrosoftYiBaiti from '../fonts/microsoft-yi-baiti.ttf';
import LeelawadeeUi from '../fonts/leelawadee-ui.ttf';
import SansSerif from '../fonts/sans-serif.ttf';
import ArialicHollow from '../fonts/ArialicHollow.ttf';

// styles
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
  }
  @font-face {
    font-family: ArialicHollow;
    src: url(${ArialicHollow});
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
  @font-face {
    font-family: TwCenMt;
    src: url(${TwCenMt});
  }
  @font-face {
    font-family: Corbel;
    src: url(${Corbel});
  }
  @font-face {
    font-family: GillSansUltraBold;
    src: url(${GillSansUltraBold});
  }
  @font-face {
    font-family: Dubai;
    src: url(${Dubai});
  }
  @font-face {
    font-family: MicrosoftYiBaiti;
    src: url(${MicrosoftYiBaiti});
  }
  @font-face {
    font-family: LeelawadeeUi;
    src: url(${LeelawadeeUi});
  }
  @font-face {
    font-family: SansSerif;
    src: url(${SansSerif});
  }
`
const GlobalContainer = styled.section`
display: flex;
flex-direction: column;
max-width: 100%;
max-height: 100%;
`
const Background = styled.img`
width: 100vw;
height: 250vw;
background-repeat: no-repeat;
background-size: contain;
position: absolute;
background: url(${bgSkyBlue});

@media(max-width: 768px) {
  display: none;
}
`
const floatingClouds = keyframes`
0% {
  opacity: 50%
}
50% {
  opacity: 100%
}
100% {
  opacity: 50%
}
`
const BackgroundUpper = styled.img`
width: 100vw;
height: 357vw;
background-repeat: no-repeat;
background-size: contain;
position: absolute;
background: url(${bgUpper});
animation: ${floatingClouds} 5s linear infinite;

@media(max-width: 768px) {
  display: none;
}
`

const IndexPage = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offsetY]);

  return (
    <GlobalContainer>
      <title>Dayanara Maurin</title>
      <GlobalStyle />
       <Background
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      />
      <BackgroundUpper
        style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      />
      <Women offsetY={offsetY} />
      <Home />
      <Projects />
      <Tecnologies />
      <Contact/>
    </GlobalContainer>
  )
}

export default IndexPage;
