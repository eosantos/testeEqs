import React from 'react';
import styled from 'styled-components';

const DadosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #229322;
`;

const DadosApi = styled.p`
  color: #fff;
`;

interface UserDataRowProps {
  label: string;
  value: string | number;
}

const UserDataRow: React.FC<UserDataRowProps> = ({ label, value }) => (
  <DadosContainer>
    <Label>{label}:</Label>
    <DadosApi>{value}</DadosApi>
  </DadosContainer>
);

export default UserDataRow;
