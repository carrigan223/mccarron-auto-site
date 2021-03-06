import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

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
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 1px black, 0 0 1px black;

  :hover {
    color: white;
    text-shadow: 5px 4px 4px grey;
    color: white;
    text-decoration: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.25rem;
  font-weight: normal;
  font-family: 'Racing Sans One';
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.45rem;
  text-decoration: none;
  text-shadow: 0 0 2px red, 0 0 2px red, 0 0 1px red, 0 0 1px red;

  :hover {
    box-shadow: 5px 4px 4px grey;
    color: white;
    text-decoration: none;
    border: 2px solid white;
  }

  &.current-page {
    text-decoration: underline;
  }
`; //#113a7e

const StyledHeader = styled(Navbar)`
  background: black;
  border-bottom: 4mm ridge rgb(192, 192, 192, 0.9);
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  //padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
`;

const CollapseContainer = styled(Navbar.Collapse)`
  justify-content: flex-end;

  padding-top: 1em;
`;

const StyledToggler = styled(Navbar.Toggle)`
  border: none;
  color: red;
  margin-left: auto;
  margin-right: auto;
`;

const NavCol = styled('Col')`
  padding: 1rem;
`;

export default function App() {
  return (
    <StyledHeader expand="lg">
      <Container fluid>
        <TitleLink to="/landing">McCarron Auto</TitleLink>

        <StyledToggler className="navbar-dark" />
        <CollapseContainer>
          <Row>
            <NavCol xs={{ span: 6, offset: 3 }} md={{ span: 2 }}>
              <NavLink to="/" activeClassName="current-page">
                Home
              </NavLink>
            </NavCol>
            <NavCol xs={{ span: 6, offset: 3 }} md={{ span: 2 }}>
              <NavLink to="/about/" activeClassName="current-page">
                About
              </NavLink>
            </NavCol>
            <NavCol xs={{ span: 6, offset: 3 }} md={{ span: 2 }}>
              <NavLink to="/contact/" activeClassName="current-page">
                Contact
              </NavLink>
            </NavCol>
            <NavCol xs={{ span: 6, offset: 3 }} md={{ span: 2 }}>
              <NavLink to="/tutorial/" activeClassName="current-page">
                Tutorials
              </NavLink>
            </NavCol>
          </Row>
        </CollapseContainer>
      </Container>
    </StyledHeader>
  );
}
