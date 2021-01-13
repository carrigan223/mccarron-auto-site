import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import UsePosts from '../hooks/use-posts';
import Hero from '../components/hero';
//import Image from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

const BlogHeader = styled(Link)`
  font-size: 2.5rem;
  font-family: 'Racing Sans One';
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const BlogContainer = styled('div')`
  //margin: 2rem auto 4rem;
  max-width: 90vw;
  padding: 3rem;
`;

export default () => {
  const posts = UsePosts();
  return (
    <>
      <Layout>
        <Hero />
        <Container
          css={css`
            //margin: 0;
          `}
          fluid
        >
          <Row>
            <Col md={{ span: 6 }}>
              <BlogContainer>
                <BlogHeader
                  css={css`
                    text-shadow: 5px 1px 3px black;
                  `}
                  to="/tutorial"
                >
                  Tutorials
                </BlogHeader>
                {posts.map(post => (
                  <PostPreview key={post.slug} post={post} />
                ))}
              </BlogContainer>
            </Col>
            <Col
              className="text-center"
              css={css`
                background-color: black;
              `}
            >
              <h5
                css={css`
                  color: white;
                  margin-top: 1.5rem;
                `}
              >
                In choosing McCarron Auto for your automotive needs
                <br />
                youare choosing to support a local veteran owned
                <br />
                bussiness
              </h5>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};
