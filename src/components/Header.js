import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import Container from '../styles/Container';

const HeaderNavLink = Styled(Link)`
  font-size: 18px;
`;

const HeaderInner = Styled.div`
  flex-wrap: wrap;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  margin: 0px;
`;

const NavLinkList = Styled.div`
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
`;

function Header() {

  return (
    <Container>
      <HeaderInner>
        <NavLinkList>
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/work">Work</HeaderNavLink>
          <HeaderNavLink to="/talks">Talks</HeaderNavLink>
          <HeaderNavLink to="/resume">Resume</HeaderNavLink>
          <HeaderNavLink to="/contact">Contact</HeaderNavLink>
        </NavLinkList>
      </HeaderInner>
    </Container>
  );
}

export default Header;