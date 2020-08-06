import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;

    font-family: "Roboto", sans-serif;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
    background: #eee;
  }
`;