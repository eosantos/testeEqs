'use client';

import React from 'react';
import styled from 'styled-components';
import H1 from '../components/Typographic/H1';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b1e23;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <H1 size="large" weight="bold" color="secondary">
        Hello World
      </H1>
    </HomeContainer>
  );
};

export default Home;
