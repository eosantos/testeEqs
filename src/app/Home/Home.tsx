// Home.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import H1 from '../components/Typographic/H1';
import UserDataDisplay from '../components/UserDataDisplay/UserDataDisplay';
import { fetchUserData, UserData } from '../services/userService';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b1e23;
  flex-direction: column;
  gap: 20px;
`;

const Separator = styled.div`
  background-color: #229322;
  width: 700px;
  height: 3px;
`;

const ErrorDiv = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #da370f;
  font-size: 24px;
`;

const Home: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do usuário:', error);
        setError('Erro ao carregar os dados do usuário.');
      });
  }, []);

  return (
    <HomeContainer>
      <H1 size="large" weight="bold" color="primary">
        Hello World from Next.js
      </H1>
      <Separator />
      {error ? (
        <ErrorDiv>{error}</ErrorDiv>
      ) : userData ? (
        <UserDataDisplay userData={userData} />
      ) : (
        <ErrorDiv>Carregando...</ErrorDiv>
      )}
    </HomeContainer>
  );
};

export default Home;
