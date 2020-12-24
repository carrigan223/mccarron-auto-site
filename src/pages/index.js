import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import UsePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import { Container, Row, Col } from 'react-bootstrap';

const BlogCol = styled('Col')`
  
`;

const BlogHeader = styled(Link)`
  font-size: 2.5rem;
  font-family: 'Racing Sans One';
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const BlogContainer = styled('div')`
  margin: 2rem auto 4rem;
  max-width: 90vw;
  padding: 1rem;
`;

export default () => {
  const posts = UsePosts();
  return (
    <>
      <Layout>
        <Hero />
        <Container
          css={css`
            background-color: purple;
            //margin: 0;
          `}
        >
          <Row>
            <BlogCol>
              <BlogContainer>
                <BlogHeader to="/tutorial">Tutorials</BlogHeader>
                {posts.map(post => (
                  <PostPreview key={post.slug} post={post} />
                ))}
              </BlogContainer>
            </BlogCol>
            <Col />
          </Row>
        </Container>
      </Layout>
    </>
  );
};
