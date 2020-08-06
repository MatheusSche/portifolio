import styled, { keyframes } from 'styled-components';
import home from '../../assets/images/homeop1.jpg';

const textRevealColor = keyframes`
  100%{
    color: white;
  } 
`;

const textReveal = keyframes`
  50%{
    width: 100%;
    left: 0;
  }
  100%{
    width: 0;
    left: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 250px;
  background: url(${home}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;

  div {
    max-width: 1200px;
    margin: 0;
    padding: 0 50px;
    justify-content: flex-start;
  }
 
`;

export const Title = styled.h1`
  display: block;
  width: fit-content;
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  color: transparent;
  animation: ${textRevealColor} .5s ease forwards;
  animation-delay: 1s; 
  margin: 0;

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: blueviolet;
    animation: ${textReveal} 1s ease;
    animation-delay: .3s; 
  }

  &:nth-child(1){
    animation-delay: 1s;
  }
  &:nth-child(2){
    animation-delay: 2s;
  }
  &:nth-child(3){
    animation-delay: 3s;
  }

  &:nth-child(1) span {
    animation-delay: .5s;
  }
  &:nth-child(2) span {
    animation-delay: 1.5s;
  }
  &:nth-child(3) span {
    animation-delay: 2.5s;
  }

`;