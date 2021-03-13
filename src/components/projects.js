import * as React from "react";
import styled from 'styled-components';

import climaFirst from '../images/clima1.png';
import climaSecond from '../images/clima3.png';
import climaThird from '../images/clima4.png';

import wineFirst from '../images/wine1.png';
import wineSecond from '../images/wine2.png';
import wineThird from '../images/wine3.png';
import wineFourth from '../images/wine4.png';

import quizWeb from '../images/quizAppWeb.png';

import quizFirst from '../images/quiz1.png';
import quizSecond from '../images/quiz2.png';
import quizThird from '../images/quiz3.png';
import quizFourth from '../images/quiz4.png';
import quizFifth from '../images/quiz5.png';
import quizSixth from '../images/quiz6.png';

import psicoWeb from '../images/psicoWeb.png';

// styles
const ProjectsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 0;
`
const Project = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1vw;
  width: 55vw;
  height: 45vw;
`
const ProjectHeader = styled.h1`
  z-index: 2;
  color: white;
  font-size: 2.5vw;
  font-family: Arial;
`
const ProjectSubtitle = styled.h3`
  z-index: 2;
  color: white;
  padding-top: 1vw;
`
const IndividualContainer = styled.div`
  height: 25vw;
  margin: 1vw;
  text-align: center;
  background-color: rgb(255, 255, 255, 0.1);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
  }
`
const Tecnologies = styled.p`
  display: none;
  font-family: Arial;
  background-color: white;
  padding: 0.4vw;
  border-radius: 10vw;

  ${IndividualContainer}:hover & {
    display: block;
  }
`
const ProjectInfo = styled.p `
  z-index: 2;
  color: white;
  padding: 0 0.8vw;
`
const ProjectImage = styled.img`
  z-index: 3;
  width: 25.5vw;
  height: auto;

  ${IndividualContainer}:hover & {
    opacity: 0.5;
  }
`
const ProjectButton = styled.a`
  display: none;
  text-decoration: none;
  color: white;
  width: 10vw;
  height: 2vw;
  background: none;
  border: 0.1vw solid white;
  border-radius: 0.3vw;
  margin: 0.5vw;

  ${IndividualContainer}:hover & {
    display: inline-block;
  }
`
const ButtonsInfo = styled.div`
  z-index: 2;
  position: absolute;
  width: 25.5vw;
  height: 14vw;
`
const ButtonsInfoUp = styled(ButtonsInfo)`
  top: 71vw;
`
const ButtonsInfoDown = styled(ButtonsInfo)`
  top: 97vw;
`

// markup
const Projects = () => {
  return (
  <ProjectsContainer>
    <ProjectHeader>PROYECTOS</ProjectHeader>
    <Project>
      <div>
        <IndividualContainer>
          {/* Container project of WINE STORE */}
          <ProjectSubtitle>Wine store</ProjectSubtitle>
          <ProjectImage src={wineFirst} alt="Wine store" />
          <ProjectInfo>Proyecto de ecommerce de productos de la industria vitivinícola.</ProjectInfo>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoUp>
          <Tecnologies>HOLA</Tecnologies>
          {/* Button link Repository and deploy */}
          <ProjectButton href="https://github.com/Dayanara847/ecommerce_winestore">Ver repositorio</ProjectButton>
          <ProjectButton href="https://web-comm.vercel.app/">Visitar</ProjectButton>
          </ButtonsInfoUp>
        </IndividualContainer>
        <IndividualContainer>
          {/* Container project of QUIZAPP */}
          <ProjectSubtitle>QuizApp</ProjectSubtitle>
          <ProjectImage src={quizWeb} alt="Quiz App" />
          <ProjectInfo>Proyecto de plataforma de uso institucional con creación de evaluaciones (quizzes).</ProjectInfo>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoDown>
          {/* Button link Repository and deploy */}
          <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio WEB</ProjectButton>
          <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio APP</ProjectButton>
          <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio BACK</ProjectButton>
          <ProjectButton href="https://quizapp-web-ten.vercel.app/">Visitar</ProjectButton>
          </ButtonsInfoDown>
        </IndividualContainer>
      </div>
      <div>
        <IndividualContainer>
          {/* Container project of CLIMA APP */}
          <ProjectSubtitle>Clima App</ProjectSubtitle>
          <ProjectImage src={climaFirst} alt="Clima App" />
          <ProjectInfo>Web conectada con api del clima, para ver el tiempo en distintas ciudades del mundo.</ProjectInfo>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoUp>
          {/* Button link Repository and deploy */}
          <ProjectButton href="https://github.com/Dayanara847/climaApp">Ver repositorio</ProjectButton>
          <ProjectButton href="https://clima-app-theta.vercel.app/">Visitar</ProjectButton>
          </ButtonsInfoUp>
        </IndividualContainer>
        <IndividualContainer>
          {/* Container project of WEB PSICÓLOGO */}
          <ProjectSubtitle>Web psicólogo</ProjectSubtitle>
          <ProjectImage src={psicoWeb} alt="Web psicólogo" />
          <ProjectInfo>Web personal de profesional de psicología.</ProjectInfo>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoDown>
          {/* Button link Repository and deploy */}
          <ProjectButton href="https://github.com/Dayanara847/drcifuFRONTEND">Ver repositorio</ProjectButton>
          <ProjectButton href="https://drcifu-frontend.vercel.app/">Visitar</ProjectButton>
          </ButtonsInfoDown>
        </IndividualContainer>
      </div>
    </Project>

  </ProjectsContainer>
  )
}

export default Projects;