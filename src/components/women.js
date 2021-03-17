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
top: 90vw;
left: 11vw;
width: 5vw;
display: ${prop => prop.offsetY < 350 ? 'none' : 'inline'};
`
const FallingDown = styled.img`
position: absolute;
top: 160rem;
left: 11rem;
width: 5rem;
display: ${prop => prop.offsetY < 1400 ? 'none' : 'inline'};
`
const Sitting = styled.img`
position: absolute;
top: 220rem;
left: 11rem;
width: 5rem;
display: ${prop => prop.offsetY < 2400 ? 'none' : 'inline'};
`

const Women = ({ offsetY }) => {
    return (
        <div>
            <Rock offsetY={offsetY} src={rock} alt="" />
            <Runner offsetY={offsetY} src={runner} alt="" />
            <Jumper offsetY={offsetY} src={jumper} alt="" />
            <FallingDownTop offsetY={offsetY} src={fallingDownTop} alt="" />
            <FallingDown offsetY={offsetY} src={fallingDown} alt="" />
            <Sitting offsetY={offsetY} src={sitting} alt="" />
        </div>
    )
};

export default Women;