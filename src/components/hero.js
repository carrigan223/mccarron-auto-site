import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

const ImageBackground = styled('div')`
  background-image: url('/images/chevy_nova.jpg');
  background-position: bottom 34% center;
  background-size: cover;
  height: 55vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('Col')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  //padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  margin-top: 0;
  margin-left: 1rem;

  h1 {
    text-shadow: 5px 1px 3px red;
    font-size: 4.25rem;
    color: white;
    margin-top: 2rem;
  }
  
  h3 {
    color: white;
    font-family: "Oswald";
  }

  p,
  a {
    color: white;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <Container>
        <Row>
          <TextBox>
            <h1>McCarron Auto</h1>
            <h3>The berskhires most trusted source for auto repairs</h3>
            <Link to="/about">&rarr; go to about me</Link>
          </TextBox>
        </Row>
      </Container>
    </ImageBackground>
  );
};

export default Hero;
