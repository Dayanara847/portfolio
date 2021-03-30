import * as React from "react";
import styled from 'styled-components';

import climaFirst from '../images/projects/clima1.png';
import wineFirst from '../images/projects/wine1.png';
import quizWeb from '../images/projects/quizAppWeb.png';
import psicoWeb from '../images/projects/psicoWeb.png';

// styles
const ProjectsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  width: 100vw;
  height: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 0;

  @media(max-width: 768px) {
    height: auto;
    width: 100vw;
  }
`
const ProjectGrid = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const ProjectHeader = styled.h1`
  z-index: 2;
  font-size: 2.5vw;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 0;
  
  @media(max-width: 768px) {
    font-size: 6vw;
  }
`
const InfoProjects = styled.p`
  font-size: 1vw;
  font-family: Arial;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 3vw;
    max-width: 70vw;
    line-height: 4.5vw;
  }
`
const IndividualContainer = styled.div`
  height: 28vw;
  width: 25.5vw;
  margin: 1vw;
  text-align: center;
  overflow: hidden;
  border: rgba(0, 0, 0, 0.2) solid 0.1vw;
  border-radius: 1vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media(max-width: 768px) {
    height: 75vw;
    width: 70vw;
    margin-bottom: 5vw;
  }
`
const BlindContainer = styled.div`
  margin-top: -32vw;
  
  ${IndividualContainer}:hover & {
    margin-top: -2vw;
    -webkit-transition-property: margin-top;
    -webkit-transition-duration: 1s;
   
    -moz-transition-property: margin-top;
    -moz-transition-duration: 1s;
   
    -o-transition-property: margin-top;
    -o-transition-duration: 1s;
   
    -ms-transition-property: margin-top;
    -ms-transition-duration: 1s;
  }

  @media(max-width: 768px) {
    margin-top: -82vw;

    ${IndividualContainer}:hover & {
      margin-top: -4.5vw;
      -webkit-transition-property: margin-top;
      -webkit-transition-duration: 1s;
     
      -moz-transition-property: margin-top;
      -moz-transition-duration: 1s;
     
      -o-transition-property: margin-top;
      -o-transition-duration: 1s;
     
      -ms-transition-property: margin-top;
      -ms-transition-duration: 1s;
    }
  }
`
const Blind = styled.div`
  z-index: 3;
  height: 30vw;
  background-color: gray;

  @media(max-width: 768px) {
    max-width: 100%;
    height: 77vw;
    padding: 0 5vw;
  }
`
const Tecnologies = styled.div`
  height: 5.5vw;
  padding-top: 1vw;
`
const Tecnology = styled.p`
  display: inline-block;
  font-family: Arial;
  font-size: 0.8vw;
  background-color: rgb(0, 0, 0, 0.1);
  padding: 0.3vw 0.55vw;
  margin: 0.5vw;
  border-radius: 10vw;

  @media(max-width: 768px) {
    font-size: 2vw;
    padding: 0.5vw 1.5vw;
  }
`
const Buttons = styled.div`
  height: 10.5vw;
  display: inline-block;
`
const ProjectInfo = styled.div`
  padding: 0 2vw 0 3vw;
  font-size: 0.9vw;
  font-family: Arial;
  line-height: 1.5vw;
  text-align: left;
  color: white;

  @media(max-width: 768px) {
    font-size: 2.5vw;
    line-height: 4vw;
  }
`
const ProjectImage = styled.img`
  z-index: 3;
  width: 25.5vw;
  height: auto;

  ${IndividualContainer}:hover & {
    opacity: 0.3;
  }

  @media(max-width: 768px) {
    width: 100%;
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

  @media(max-width: 768px) {
    font-size: 2.2vw;
  }
`
const ProjectSubtitle = styled.h3`
  z-index: 2;
  padding-top: 1vw;
  font-family: Arial;

  @media(max-width: 768px) {
    padding-top: 5vw;
    font-size: 3vw;
  }
`
const ProjectSubtitleBlind = styled(ProjectSubtitle)`
  color: white;
  padding-top: 6vw;
  font-size: 1.5vw;

  @media(max-width: 768px) {
    font-size: 3.3vw;
    padding-top: 12vw;
  }
`
const ProjectSubtitleBlindWine = styled(ProjectSubtitleBlind)`
  font-family: AlexBrushRegular;
  padding-top: 3vw;
  font-size: 2vw;

  @media(max-width: 768px) {
    font-size: 4.7vw;
    padding-top: 10vw;
  }
`
const ProjectSubtitleBlindPsico = styled(ProjectSubtitleBlind)`
  font-family: JosefinBold;
  padding-top: 7.5vw;

  @media(max-width: 768px) {
    padding-top: 16vw;
  }
 `
const ProjectSubtitleBlindQuiz = styled(ProjectSubtitleBlind)`
  font-family: PoorRichard;
  padding-top: 4vw;

  @media(max-width: 768px) {
    padding-top: 11vw;
  }
`

// markup
const Projects = () => {
  return (
  <ProjectsContainer>
    <ProjectHeader>PROYECTOS</ProjectHeader>
    <InfoProjects>Para más información, desplaza tu mouse por los proyectos o haz click en ellos (mobile).</InfoProjects>
    <ProjectGrid>
      {/* Container project of QUIZAPP */}
      <IndividualContainer>
      <BlindContainer>
      <Blind>
          <ProjectSubtitleBlindQuiz>QuizApp</ProjectSubtitleBlindQuiz>
                <ProjectInfo>Proyecto de plataforma de uso institucional con creación de evaluaciones online.
                  <ul>
                    <li>Envío de mails con Nodemailer.</li>
                    <li>Administración de usuarios y roles.</li>
                    <li>Versión WEB para uso institucional.</li>
                    <li>Versión Mobile para uso estudiantil.</li>
                  </ul>
                </ProjectInfo>
                {/* Button link Repository and deploy */}
                <Buttons>
                  <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio WEB</ProjectButton>
                  <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio APP</ProjectButton>
                  <ProjectButton href="https://github.com/Dayanara847/quizApp_WEB">Ver repositorio BACK</ProjectButton>
                  <ProjectButton href="https://quizapp-web-ten.vercel.app/">Visitar</ProjectButton>
                </Buttons>
          </Blind>
          <ProjectSubtitle>QuizApp</ProjectSubtitle>
          <ProjectImage src={quizWeb} alt="Quiz App" />
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
        </BlindContainer>
      </IndividualContainer>
        {/* Container project of WEB PSICÓLOGO */}
        <IndividualContainer>
          <BlindContainer>
            <Blind>
            <ProjectSubtitleBlindPsico>Dr. Alejandro Cifuentes</ProjectSubtitleBlindPsico>
            <ProjectInfo>Web personal de profesional de psicología.
            <ul>
              <li>Single Page Application utilizando React.</li>
              <li>Envío de mails con EmailJS.</li>
            </ul>
          </ProjectInfo>
            {/* Button link Repository and deploy */}
            <Buttons>
              <ProjectButton href="https://github.com/Dayanara847/drcifuFRONTEND">Ver repositorio</ProjectButton>
              <ProjectButton href="https://dralejandrocifuentes.vercel.app/">Visitar</ProjectButton>
              </Buttons>
            </Blind>
          <ProjectSubtitle>Dr. Alejandro Cifuentes</ProjectSubtitle>
          <ProjectImage src={psicoWeb} alt="Web psicólogo" />
          <Tecnologies>
              <Tecnology>JavaScript</Tecnology>
              <Tecnology>CSS modules</Tecnology>
              <Tecnology>React</Tecnology>
            </Tecnologies>
          </BlindContainer>
        </IndividualContainer>
        {/* Container project of CLIMA APP */}
        <IndividualContainer>
          <BlindContainer>
            <Blind>
            <ProjectSubtitleBlind>Clima App</ProjectSubtitleBlind>
            <ProjectInfo>Web conectada con api del clima, para ver el tiempo en distintas ciudades del mundo.
            <ul>
              <li>Consume datos de API externa.</li>
              <li>Desarrollado con CSS sin uso de librerías externas.</li>
            </ul>
          </ProjectInfo>
            {/* Button link Repository and deploy */}
            <Buttons>
              <ProjectButton href="https://github.com/Dayanara847/climaApp">Ver repositorio</ProjectButton>
              <ProjectButton href="https://clima-app-theta.vercel.app/">Visitar</ProjectButton>
            </Buttons>
            </Blind>
          <ProjectSubtitle>Clima App</ProjectSubtitle>
          <ProjectImage src={climaFirst} alt="Clima App" />
          <Tecnologies>
              <Tecnology>React</Tecnology>
              <Tecnology>JavaScript</Tecnology>
              <Tecnology>CSS modules</Tecnology>
            </Tecnologies>
          </BlindContainer>
        </IndividualContainer>
        {/* Container project of WINE STORE */}
        <IndividualContainer>
          <BlindContainer>
          <Blind>
            <ProjectSubtitleBlindWine>Wine store</ProjectSubtitleBlindWine>
              <ProjectInfo>Proyecto de ecommerce de productos de la industria vitivinícola.
              <ul>
                <li>Envío de mails con Nodemailer.</li>
                <li>Integración de pasarela de Pago, Mercado Pago.</li>
                <li>Administración de carrito de compras, gestión de claves.</li>
              </ul>
            </ProjectInfo>
              {/* Button link Repository and deploy */}
              <Buttons>
                <ProjectButton href="https://github.com/Dayanara847/ecommerce_winestore">Ver repositorio</ProjectButton>
                <ProjectButton href="https://web-comm.vercel.app/">Visitar</ProjectButton>
              </Buttons>
          </Blind>
          <ProjectSubtitle>Wine store</ProjectSubtitle>
          <ProjectImage src={wineFirst} alt="Wine store" />
          {/* Container tecnologies & buttons/links */}
          <Tecnologies>
              <Tecnology>React</Tecnology>
              <Tecnology>Redux</Tecnology>
              <Tecnology>JavaScript</Tecnology>
              <Tecnology>Express</Tecnology>
              <Tecnology>PostgreSQL</Tecnology>
              <Tecnology>Sequelize</Tecnology>
            </Tecnologies>
          </BlindContainer>
        </IndividualContainer>
    </ProjectGrid>
  </ProjectsContainer>
  )
}

export default Projects;