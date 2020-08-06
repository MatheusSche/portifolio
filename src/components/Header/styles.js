import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  background: #22242A;
  padding: 20px;
  width: 100%;
  height: 30px;

  label {
    z-index: 1;
    color: #fff;
    position: fixed;
    cursor: pointer;
    left: 300px;
    font-size: 20px;
    margin: 5px 0;
    transition: 0.5s;
    transition-property: color;

    &:hover {
      color: #1983d3;
    }

  }

  h3 {
    color: #fff;
    margin: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;

    span {
      color: #1dc4e7;
    }
  }  
`;

export const Input = styled.input`
`;

