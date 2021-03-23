import * as React from "react";
import styled from 'styled-components';

import climaFirst from '../images/projects/clima1.png';
import wineFirst from '../images/projects/wine1.png';
import quizWeb from '../images/projects/quizAppWeb.png';
import psicoWeb from '../images/projects/psicoWeb.png';

//clip-path: polygon(0 10%, 100% 15%, 100% 100%, 0% 90%);
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
  }
`
const Project = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1vw;
  width: 55vw;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`
const ProjectHeader = styled.h1`
  z-index: 2;
  font-size: 2.5vw;
  font-family: ArialicHollow;
`
const ProjectSubtitle = styled.h3`
  z-index: 2;
  padding-top: 1vw;
  font-family: Arial;

  @media(max-width: 768px) {
    padding-top: 0;
  }
`
const IndividualContainer = styled.div`
  height: 28vw;
  margin: 1vw;
  text-align: center;
  overflow: hidden;
  border: rgba(0, 0, 0, 0.2) solid 0.1vw;
  border-radius: 1vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media(max-width: 768px) {
    height: 65vw;
  }
`
const BlindContainer = styled.div`
  margin-top: -31vw;
  
  ${IndividualContainer}:hover & {
    margin-top: 0vw;
    -webkit-transition-property: margin-top;
    -webkit-transition-duration: 1s;
   
    -moz-transition-property: margin-top;
    -moz-transition-duration: 1s;
   
    -o-transition-property: margin-top;
    -o-transition-duration: 1s;
   
    -ms-transition-property: margin-top;
    -ms-transition-duration: 1s;
  }
`
const Blind = styled.div`
  z-index: 3;
  width: 25.5vw;
  height: 31vw;
  background-color: gray;
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
`
const ProjectImage = styled.img`
  z-index: 3;
  width: 25.5vw;
  height: auto;

  ${IndividualContainer}:hover & {
    opacity: 0.3;
  }

  @media(max-width: 768px) {
    width: 60vw;
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
    color: black;
    border: 0.1vw solid white;
  }
`
const ButtonsInfo = styled.div`
  display: grid;
  z-index: 2;
  position: absolute;
  width: 25.5vw;
  height: 31vw;
  opacity: 0;

  ${IndividualContainer}:hover & {
    opacity: 100;
    -webkit-transition-property: opacity;
    -webkit-transition-duration: 3s;
   
    -moz-transition-property: opacity;
    -moz-transition-duration: 3s;
   
    -o-transition-property: opacity;
    -o-transition-duration: 3s;
   
    -ms-transition-property: opacity;
    -ms-transition-duration: 3s;
  }

  @media(max-width: 768px) {
    opacity: 100;
  }
`
const ButtonsInfoUp = styled(ButtonsInfo)`
  top: 65vw;
`
const ButtonsInfoDown = styled(ButtonsInfo)`
  top: 95.5vw;
`
const ProjectSubtitleBlind = styled(ProjectSubtitle)`
  color: white;
  padding-top: 6vw;
  font-size: 1.5vw;
`
const ProjectSubtitleBlindWine = styled(ProjectSubtitleBlind)`
  font-family: AlexBrushRegular;
  padding-top: 2vw;
  font-size: 2vw;
`
const ProjectSubtitleBlindPsico = styled(ProjectSubtitleBlind)`
  font-family: JosefinBold;
  padding-top: 4vw;
`
const ProjectSubtitleBlindQuiz = styled(ProjectSubtitleBlind)`
  font-family: PoorRichard;
  padding-top: 4vw;
`

// markup
const Projects = () => {
  return (
  <ProjectsContainer>
    <ProjectHeader>PROYECTOS</ProjectHeader>
    <Project>

      <div>
      {/* Container project of QUIZAPP */}
      <IndividualContainer>
        <BlindContainer>
          <Blind></Blind>
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
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoUp>
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
          </ButtonsInfoUp>
        </BlindContainer>
      </IndividualContainer>


        {/* Container project of WEB PSICÓLOGO */}
        <IndividualContainer>
          <BlindContainer>
            <Blind></Blind>
          <ProjectSubtitle>Dr. Alejandro Cifuentes</ProjectSubtitle>
          <ProjectImage src={psicoWeb} alt="Web psicólogo" />
          <Tecnologies>
              <Tecnology>JavaScript</Tecnology>
              <Tecnology>CSS modules</Tecnology>
              <Tecnology>React</Tecnology>
            </Tecnologies>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoDown>
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
              <ProjectButton href="https://drcifu-frontend.vercel.app/">Visitar</ProjectButton>
              </Buttons>
          </ButtonsInfoDown>
          </BlindContainer>
        </IndividualContainer>
      </div>


      <div>
        {/* Container project of CLIMA APP */}
        <IndividualContainer>
          <BlindContainer>
            <Blind></Blind>
          <ProjectSubtitle>Clima App</ProjectSubtitle>
          <ProjectImage src={climaFirst} alt="Clima App" />
          <Tecnologies>
              <Tecnology>React</Tecnology>
              <Tecnology>JavaScript</Tecnology>
              <Tecnology>CSS modules</Tecnology>
            </Tecnologies>
          {/* Container tecnologies & buttons/links */}
          <ButtonsInfoUp>
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
          </ButtonsInfoUp>
          </BlindContainer>
        </IndividualContainer>


        {/* Container project of WINE STORE */}
        <IndividualContainer>
          <BlindContainer>
          <Blind></Blind>
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
          <ButtonsInfoDown>
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
          </ButtonsInfoDown>
          </BlindContainer>
        </IndividualContainer>
      </div>
    </Project>

  </ProjectsContainer>
  )
}

export default Projects;