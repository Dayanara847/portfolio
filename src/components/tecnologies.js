import React from 'react';
import styled, { keyframes } from 'styled-components';

// images
import Reactjs from '../images/tecnologies/react.png';
import Redux from '../images/tecnologies/redux.png';
import Html from '../images/tecnologies/html.png';
import Materialui from '../images/tecnologies/material-ui.png';
import Nodejs from '../images/tecnologies/node.png';
import Sequelize from '../images/tecnologies/sequelize.png';
import Styledcomponents from '../images/tecnologies/styled-components.png';
import Javascript from '../images/tecnologies/javascript.png';
import Gatsby from '../images/tecnologies/gatsby.png';
import Css from '../images/tecnologies/CSS.png';
import PostgreSQL from '../images/tecnologies/postgreSQL.png';
import Express from '../images/tecnologies/express.png';

// styles
const floatingEven = keyframes`
    0% {
        transform: translate(0%)
    }
    33% {
        transform: translate(1%, -1%)
    }
    66% {
        transform: translate(-2%, 2%)
    }
    100% {
        transform: translate(0%, 0%)
    }
`
const floatingOdd = keyframes`
    0% {
        transform: translate(0%)
    }
    33% {
        transform: translate(-1%, -1%)
    }
    66% {
        transform: translate(2%, 2%)
    }
    100% {
        transform: translate(0%, 0%)
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vw;

    @media(max-width: 768px) {
        height: 100vh;
      }
`
const TecnologiesContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(6, 8.5vw);
    grid-template-rows: 8vw 8vw;
    justify-content: center;
    align-items: center;
`
const TecnologiesHeader = styled.h1`
    padding-bottom: 6vw;
    font-family: ArialicHollow;
`
const ImageContainer = styled.div`
    display: flex;
    margin: 2vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${props => props.number % 2 === 0 ? floatingEven : floatingOdd} 2s linear infinite;

    &:hover {
        animation: none;
    }
`
const TecnologyLogo = styled.img `
    width: 100%;
`
const TecnologyName = styled.p`
    opacity: 0;
    font-family: ${props => props.font};
    font-size: ${props => props.material ? "0.69vw" : "1vw"};
    
    ${ImageContainer}:hover & {
        opacity: 100;
        -webkit-transition: opacity 2s ease-out;
        -moz-transition: opacity 2s ease-out;
        -o-transition: opacity 2s ease-out;
        -ms-transition: opacity 2s ease-out;
    }
`
const Post = styled.span`
    font-family: LeelawadeeUi;
    font-size: 0.9vw;
`

// Tecnology images & fonts
const images = [{
    id: 0,
    name: "React",
    src: Reactjs,
    font: "Arial"
}, {
    id: 1,
    name: "Redux",
    src: Redux,
    font: "Arial"
}, {
    id: 2,
    name: "HTML",
    src: Html,
    font: "GillSansUltraBold"
}, {
    id: 3,
    name: "MATERIAL-UI",
    src: Materialui,
    font: "Corbel"
}, {
    id: 4,
    name: "Node.js",
    src: Nodejs,
    font: "Arial"
}, {
    id: 5,
    name: "Sequelize",
    src: Sequelize,
    font: "Dubai"
}, {
    id: 6,
    name: "styled components",
    src: Styledcomponents,
    font: "Dubai"
}, {
    id: 7,
    name: "JavaScript",
    src: Javascript,
    font: "SansSerif"
}, {
    id: 8,
    name: "Gatsby",
    src: Gatsby,
    font: "TwCenMt"
}, {
    id: 9,
    name: "CSS",
    src: Css,
    font: "GillSansUltraBold"
}, {
    id: 10,
    name: "Postgre",
    post: "SQL",
    src: PostgreSQL,
    font: "MicrosoftYiBaiti"
}, {
    id: 11,
    name: "Express",
    src: Express,
    font: "Arial"
}];

const Tecnologies = () => {
    return (
        <Container>
            <TecnologiesHeader>HE TRABAJADO CON</TecnologiesHeader>
            <TecnologiesContainer>
                    {images.map(image => {
                        return (
                            <ImageContainer number={Math.floor(Math.random()*(10 + 1))} key={image.id}>
                                <TecnologyLogo 
                                src = {image.src} />
                                <TecnologyName font={image.font} material={image.name === "MATERIAL-UI" ? true : null}> {image.name}{image.post ? <Post>SQL</Post> : null} </TecnologyName>
                            </ImageContainer>
                        )
                    })}
            </TecnologiesContainer>
        </Container>
    )
};

export default Tecnologies;