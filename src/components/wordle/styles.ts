import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const WordList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const WordRow = styled.div`
  display: flex;
  column-gap: 6px;
`;

export const LetterSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #d7dadc;
  background-color: #3a3a3c;
  text-transform: uppercase;
  font-size: 32px;
  /* letter-exist 
  background-color: #b59f3b; */
  /* letter-right 
  background-color: #538d4e; */

  width: 62px;
  height: 62px;
`;
