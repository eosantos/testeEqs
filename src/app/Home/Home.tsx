// Home.tsx

'use client';

import styled from 'styled-components';
import H1 from '../components/Typographic/H1';
import Header from '../components/Header';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1e23;
  flex-direction: column;
  gap: 20px;
  padding-top: 100px;
`;

const HomeDiv = styled.div`
  height: 100vh;
`;

const Separator = styled.div`
  background-color: #229322;
  width: 550px;
  height: 3px;
  margin-bottom: 3rem;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeDiv>
        <Header logoLink="/" />
        <H1 size="large" weight="bold" color="primary">
          Bem vindo a Cadastra
        </H1>
        <Separator />
      </HomeDiv>
    </HomeContainer>
  );
};

export default Home;
