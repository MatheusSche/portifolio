import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  margin-left: 250px;
  padding: 0 20px;
`;

export const Card = styled.div`
  background: #2f3542;
  padding: 0 20px;
  margin: 0 10px;
  width: calc(33% - 20px);
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;

  p {
    margin-top: 20px;
    font-weight: 300;
    letter-spacing: 2px;
    max-height: 0;
    opacity: 1;
    transition: 0.3s linear;
  }

  &:hover p {
    max-height: 40px;
    opacity: 1;
  }

  &:hover div{
    background: none;
    color: #ff6348;
    transform: scale(1.6);
  }

  div {
    font-size: 28px;
    background: #ff6348;
    width: 90px;
    height: 90px;
    text-align: center;
    line-height: 60px !important;
    border-radius: 50%;
    transition: 0.3s linear;
    
    svg {
      margin-top: 15px;
    }
  
  }

`;




export const Title = styled.h1`
  color: #009cde;
`;