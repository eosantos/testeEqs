// components/UserDataDisplay/UserDataDisplay.tsx

import React from 'react';
import styled from 'styled-components';
import UserDataRow from './UserDataRow';
import { UserData } from '../../services/userService';

const Sucess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface UserDataDisplayProps {
  userData: UserData;
}

const UserDataDisplay: React.FC<UserDataDisplayProps> = ({ userData }) => (
  <Sucess>
    <UserDataRow label="ID" value={userData.uid} />
    <UserDataRow label="Nome" value={userData.name} />
    <UserDataRow label="E-mail" value={userData.email} />
    <UserDataRow label="Telefone" value={userData.phone} />
    <UserDataRow label="CPF" value={userData.cpf} />
    <UserDataRow label="Tipo de usuário" value={userData.user_type} />
    <UserDataRow
      label="Perfil de investidor"
      value={userData.investor_profile}
    />
  </Sucess>
);

export default UserDataDisplay;
