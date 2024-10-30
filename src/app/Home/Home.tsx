// Home.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import H1 from '../components/Typographic/H1';
import UserDataDisplay from '../components/UserDataDisplay/UserDataDisplay';
import { fetchUserData, UserData } from '../services/userService';
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
      <HomeDiv>
        <Header logoLink="/" />
        <H1 size="large" weight="bold" color="primary">
          Bem vindo a Eqseed
        </H1>
        <Separator />
        {error ? (
          <ErrorDiv>{error}</ErrorDiv>
        ) : userData ? (
          <UserDataDisplay userData={userData} />
        ) : (
          <ErrorDiv>Carregando...</ErrorDiv>
        )}
      </HomeDiv>
    </HomeContainer>
  );
};

export default Home;
