import styled, {keyframes} from 'styled-components';

export const SpinnerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index:1;
`

const rotate = keyframes`
100% {
    transform: rotate(360deg);
}
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`


export const Spinner = styled.svg`
width:50px;
height:50px;
animation: ${rotate} 2s linear infinite;
>circle {
    stroke: rgba(0,0,255,0.5);
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
}
`