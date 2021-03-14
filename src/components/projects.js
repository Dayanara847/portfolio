import * as React from "react";
import styled, { keyframes } from 'styled-components';

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
  font-family: Arial;
`
const IndividualContainer = styled.div`
  height: 31vw;
  margin: 1vw;
  text-align: center;
  background-color: rgb(255, 255, 255, 0.1);
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
  }
`
const BlindContainer = styled.div`
  margin-top: -31vw;

  ${IndividualContainer}:hover & {
    margin-top: 0vw;
    -webkit-transition-property: margin-top;
    -webkit-transition-duration: .5s;
   
    -moz-transition-property: margin-top;
    -moz-transition-duration: .5s;
   
    -o-transition-property: margin-top;
    -o-transition-duration: .5s;
   
    -ms-transition-property: margin-top;
    -ms-transition-duration: .5s;
  }
`
const Blind = styled.div`
  z-index: 3;
  width: 25.5vw;
  height: 31vw;
  background-color: gray;
`
const Tecnologies = styled.div`
  padding-top: 2vw;
  height: 7vw;
`
const Tecnology = styled.p`
  display: none;
  font-family: Arial;
  font-size: 0.8vw;
  background-color: rgb(255, 255, 255, 0.6);
  padding: 0.3vw 0.55vw;
  margin: 0.5vw;
  border-radius: 10vw;

  ${IndividualContainer}:hover & {
    display: inline-block;
  }
`
const OneTecnology = styled(Tecnology)`
  margin-top: 3vw;

  ${IndividualContainer}:hover & {
    display: inline-block;
  }
`
const ProjectInfo = styled.p `
  z-index: 2;
  color: white;
  padding: 0 0.8vw;
  font-size: 0.9vw;
  font-family: Arial;
  line-height: 1.5vw;
  text-align: left;
`
const ProjectImage = styled.img`
  z-index: 3;
  width: 25.5vw;
  height: auto;

  ${IndividualContainer}:hover & {
    opacity: 0.3;
  }
`
const ProjectButton = styled.a`
  font-size: 0.95vw;
  margin: 0.5vw;
  padding: 0.25vw 1vw;
  border: 0.1vw solid white;
  border-radius: 0.3vw;

  display: none;
  text-decoration: none;
  color: white;
  background: none;
  font-family: Arial;

  &:hover {
    background-color: rgba(12, 183, 242, 0.2);
  }

  ${IndividualContainer}:hover & {
    display: inline-block;
  }
`
const ButtonsInfo = styled.div`
  display: grid;
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
          <BlindContainer>
          <Blind></Blind>
          {/* Container project of WINE STORE */}
          <ProjectSubtitle>Wine store</ProjectSubtitle>
          <ProjectImage src={wineFirst} alt="Wine store" />
          <ProjectInfo>Proyecto de ecommerce de productos de la industria vitivinícola.
            <ul>
              <li>Envío de mails con Nodemailer.</li>
              <li>Integración de pasarela de Pago, Mercado Pago.</li>
              <li>Administración de carrito de compras, gestión de claves.</li>
            </ul>
          </ProjectInfo>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoUp>
            <Tecnologies>
              <Tecnology>React</Tecnology>
              <Tecnology>Redux</Tecnology>
              <Tecnology>JavaScript</Tecnology>
              <Tecnology>Express</Tecnology>
              <Tecnology>PostgreSQL</Tecnology>
              <Tecnology>Sequelize</Tecnology>
            </Tecnologies>
            {/* Button link Repository and deploy */}
            <div>
              <ProjectButton href="https://github.com/Dayanara847/ecommerce_winestore">Ver repositorio</ProjectButton>
              <ProjectButton href="https://web-comm.vercel.app/">Visitar</ProjectButton>
            </div>
          </ButtonsInfoUp>
          </BlindContainer>
        </IndividualContainer>
        <IndividualContainer>
        <BlindContainer>
          <Blind></Blind>
          {/* Container project of QUIZAPP */}
          <ProjectSubtitle>QuizApp</ProjectSubtitle>
          <ProjectImage src={quizWeb} alt="Quiz App" />
          <ProjectInfo>Proyecto de plataforma de uso institucional con creación de evaluaciones online.
            <ul>
              <li>Envío de mails con Nodemailer.</li>
              <li>Administración de usuarios y roles.</li>
              <li>Versión WEB para uso institucional.</li>
              <li>Versión Mobile para uso estudiantil.</li>
            </ul>
          </ProjectInfo>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoDown>
            <Tecnologies>
              <Tecnology>React</Tecnology>
              <Tecnology>Express</Tecnology>
              <Tecnology>Redux</Tecnology>
              <Tecnology>PostgreSQL</Tecnology>
              <Tecnology>JavaScript</Tecnology>
              <Tecnology>Sequelize</Tecnology>
              <Tecnology>Ionic</Tecnology>
              <Tecnology>Angular</Tecnology>
            </Tecnologies>
            {/* Button link Repository and deploy */}
            <div>
              <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio WEB</ProjectButton>
              <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio APP</ProjectButton>
              <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio BACK</ProjectButton>
              <ProjectButton href="https://quizapp-web-ten.vercel.app/">Visitar</ProjectButton>
            </div>
          </ButtonsInfoDown>
          </BlindContainer>
        </IndividualContainer>
      </div>
      <div>
        <IndividualContainer>
          <BlindContainer>
            <Blind></Blind>
          {/* Container project of CLIMA APP */}
          <ProjectSubtitle>Clima App</ProjectSubtitle>
          <ProjectImage src={climaFirst} alt="Clima App" />
          <ProjectInfo>Web conectada con api del clima, para ver el tiempo en distintas ciudades del mundo.
            <ul>
              <li>Consume datos de API externa.</li>
              <li>Desarrollado con CSS sin uso de librerías externas.</li>
            </ul>
          </ProjectInfo>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoUp>
            <Tecnologies>
              <OneTecnology>React</OneTecnology>
              <Tecnology>JavaScript</Tecnology>
            </Tecnologies>
            {/* Button link Repository and deploy */}
            <div>
              <ProjectButton href="https://github.com/Dayanara847/climaApp">Ver repositorio</ProjectButton>
              <ProjectButton href="https://clima-app-theta.vercel.app/">Visitar</ProjectButton>
            </div>
          </ButtonsInfoUp>
          </BlindContainer>
        </IndividualContainer>
        <IndividualContainer>
          <BlindContainer>
            <Blind></Blind>
          {/* Container project of WEB PSICÓLOGO */}
          <ProjectSubtitle>Web psicólogo</ProjectSubtitle>
          <ProjectImage src={psicoWeb} alt="Web psicólogo" />
          <ProjectInfo>Web personal de profesional de psicología.
            <ul>
              <li>Single Page Application utilizando React.</li>
              <li>Envío de mails con Nodemailer.</li>
            </ul>
          </ProjectInfo>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoDown>
            <Tecnologies>
              <Tecnology>JavaScript</Tecnology>
              <OneTecnology>React</OneTecnology>
            </Tecnologies>
            {/* Button link Repository and deploy */}
            <div>
              <ProjectButton href="https://github.com/Dayanara847/drcifuFRONTEND">Ver repositorio</ProjectButton>
              <ProjectButton href="https://drcifu-frontend.vercel.app/">Visitar</ProjectButton>
              </div>
          </ButtonsInfoDown>
          </BlindContainer>
        </IndividualContainer>
      </div>
    </Project>

  </ProjectsContainer>
  )
}

export default Projects;