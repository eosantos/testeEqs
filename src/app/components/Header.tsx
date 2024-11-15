import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

type HeaderProps = {
  logoLink: string;
};

const Header: React.FC<HeaderProps> = ({ logoLink }) => {
  return (
    <HeaderContainer>
      <Link href={logoLink} passHref>
        <Logo
          src="https://portfoliodeagencias.meioemensagem.com.br/anuario/conteudo-img/29099/img1588863326324.jpg"
          alt="Logo"
        />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
