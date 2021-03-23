import * as React from "react";
import styled from 'styled-components';

// women
import rock from '../images/women/rock.png';
import fallingDown from '../images/women/fallingDown.png';
import fallingDownTop from '../images/women/fallingDownTop.png';
import jumper from '../images/women/jumping.png';
import runner from '../images/women/running.png';
import sitting from '../images/women/sitting.png';

// styles
const ContainerWomen = styled.div`
    @media(max-width: 768px) {
        display: none;
    }
`
const Rock = styled.img`
position: absolute;
top: 34.3vw;
left: -0.5vw;
width: 10vw;
transform: ${prop => `translateY(${-prop.offsetY / 30}vw)`};
`
const Runner = styled.img`
position: absolute;
top: 29.5vw;
left: 1vw;
width: 4vw;
display: ${prop => prop.offsetY < 150 ? 'inline' : 'none'};
transform: ${prop => `translate(${prop.offsetY / 50}vw, ${-prop.offsetY / 30}vw)`};
`
const Jumper = styled.img`
position: absolute;
top: 15vw;
left: 11vw;
width: 4vw;
display: ${prop => prop.offsetY < 150 ? 'none' : 'inline'};
`
const FallingDownTop = styled.img`
position: absolute;
top: 90vw;
left: 11vw;
width: 5vw;
display: ${prop => prop.offsetY < 350 ? 'none' : 'inline'};
`
const FallingDown = styled.img`
position: absolute;
top: 155vw;
left: 11vw;
width: 5vw;
display: ${prop => prop.offsetY < 1400 ? 'none' : 'inline'};
`
const Sitting = styled.img`
position: absolute;
top: 225vw;
left: 11vw;
width: 5vw;
display: ${prop => prop.offsetY < 2400 ? 'none' : 'inline'};
`

const Women = ({ offsetY }) => {
    return (
        <ContainerWomen>
            <Rock offsetY={offsetY} src={rock} alt="" />
            <Runner offsetY={offsetY} src={runner} alt="" />
            <Jumper offsetY={offsetY} src={jumper} alt="" />
            <FallingDownTop offsetY={offsetY} src={fallingDownTop} alt="" />
            <FallingDown offsetY={offsetY} src={fallingDown} alt="" />
            <Sitting offsetY={offsetY} src={sitting} alt="" />
        </ContainerWomen>
    )
};

export default Women;