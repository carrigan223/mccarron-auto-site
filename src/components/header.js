import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const TitleLink = styled(Link)`
  justify-content: flex-start;
  color: white;
  font-size: 2rem;
  font-weight: normal;
  font-family: 'Racing Sans One';
  line-height: 1;
  margin-left: 1em;
  padding: 0.25rem;
  text-decoration: none;
  text-shadow: 0 0 2px red, 0 0 2px red, 0 0 1px red, 0 0 1px red;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.25rem;
  font-weight: normal;
  font-family: 'Racing Sans One';
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.15rem;
  text-decoration: none;
  text-shadow: 0 0 2px red, 0 0 2px red, 0 0 1px red, 0 0 1px red;

  &.current-page {
    border: 2px solid white;
  }
`; //#113a7e

const StyledHeader = styled(Navbar)`
  background: black;
  border-bottom: 4mm ridge rgb(192, 192, 192, 0.9);
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
`;

const CollapseContainer = styled(Navbar.Collapse)`
  justify-content: flex-end;
  
  padding-top: 1em;
`;

const StyledToggler = styled(Navbar.Toggle)`
  border: none;
  color: red;
`;

export default function App() {
  return (
    <StyledHeader expand="lg">
      <TitleLink to="/landing">McCarron Auto</TitleLink>

      <StyledToggler className="navbar-dark" />
      <CollapseContainer>
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          Contact
        </NavLink>
        <NavLink to="/tutorial/" activeClassName="current-page">
          Tutorials
        </NavLink>
      </CollapseContainer>
    </StyledHeader>
  );
}
