import React from 'react';
import styled from 'styled-components';

interface H1Props {
  size?: 'large' | 'small';
  weight?: 'normal' | 'bold' | 'light';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const StyledH1 = styled.h1<H1Props>`
  font-family: ${({ weight }) =>
    weight === 'light'
      ? 'Avenir Light'
      : weight === 'bold'
        ? 'Avenir'
        : 'Georgia'};
  font-size: ${({ size }) => (size === 'large' ? '56px' : '32px')};
  font-weight: ${({ weight }) =>
    weight === 'bold' ? '700' : weight === 'light' ? '300' : '400'};
  color: ${({ color }) => (color === 'secondary' ? '#ffffff' : '#1b1e23')};
  text-align: center;
`;

const H1: React.FC<H1Props> = ({
  children,
  size = 'large',
  weight = 'normal',
  color = 'primary'
}) => {
  return (
    <StyledH1 size={size} weight={weight} color={color}>
      {children}
    </StyledH1>
  );
};

export default H1;
