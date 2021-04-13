import React from 'react';
import Styled from "styled-components/native";
import type { ReactNode } from 'react'
import Counter from "~/screens/Counter"

const Container = Styled.View`
  flex:1;
  background-color:#EEE;
`;

const App: () => ReactNode = () => {
  return (
    <Container>
      <Counter title="this is counter" initValue={0} />
    </Container>
  );
};

export default App;
