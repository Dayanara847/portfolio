import React from 'react';
import styled from 'styled-components';

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
    grid-template-columns: repeat(6, 10vw);
    grid-template-rows: 10vw 10vw;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px) {
        grid-template-columns: repeat(3, 22vw);
        grid-template-rows: 21vw 21vw;
    }
`
const TecnologiesHeader = styled.h1`
    padding-bottom: 4.5vw;
    font-size: 2vw;
    font-family: ArialicHollow;

    @media(max-width: 768px) {
        font-size: 5vw;
    }
`
const TecnologyLogo = styled.img `
    width: 75%;
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
                                <TecnologyLogo 
                                src = {image.src} />
                        )
                    })}
            </TecnologiesContainer>
        </Container>
    )
};

export default Tecnologies;