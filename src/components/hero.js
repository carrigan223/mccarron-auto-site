import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom 34% center;
  background-size: cover;
  height: 55vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
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
    font-family: 'Oswald';
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
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "chevy_nova.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <Container>
        <Row>
          <Col>
            <TextBox>
              <h1>McCarron Auto</h1>
              <h3>The berskhires most trusted source for auto repairs</h3>
              <Link to="/about">&rarr; go to about me</Link>
            </TextBox>
          </Col>
        </Row>
      </Container>
    </ImageBackground>
  );
};

export default Hero;
