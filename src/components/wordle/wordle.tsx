import React from "react";
import { Container, LetterSquare, WordList, WordRow } from "./styles";

const Wordle: React.FC = () => {
  const wordTests = ["A", "B", "C", "D", "F"];

  return (
    <Container>
      <h2>awdw</h2>
      <WordList>
        {wordTests.map((letter) => (
          <WordRow>
            {wordTests.map((letter) => (
              <LetterSquare>{letter}</LetterSquare>
            ))}
          </WordRow>
        ))}
      </WordList>
      <h2>awdw</h2>
    </Container>
  );
};

export default Wordle;
