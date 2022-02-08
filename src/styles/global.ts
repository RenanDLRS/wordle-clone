import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: none;
  }

  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
    font-size: 16px;
    font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
    
    button{
      user-select: none;
      cursor: pointer;
    }
    /* [disabled]{
      opacity: 0.5;
      cursor: not-allowed;
    } */
  }
`;

export const PageContainer = styled.div`
  background-color: #121213;
  width: 100%;
  height: 100%;
`;
