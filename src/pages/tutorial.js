import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import UsePosts from '../hooks/use-posts';
import { Row, Col } from 'react-bootstrap';

const BlogCol = styled('Col')``;

const BlogHeader = styled('text')`
  font-size: 2.5rem;
  font-family: 'Racing Sans One';
  padding-top: 2rem;
  padding-bottom: 1rem;
  color: black;
`;

const BlogContainer = styled('div')`
  margin: 2rem auto 4rem;
  max-width: 90vw;
  padding: 1rem;
  margin-left: 1rem;
  background-color: red;
`;

export default () => {
  const posts = UsePosts();
  return (
    <>
      <Layout>
        <Row>
          <BlogCol>
            <BlogContainer>
              <BlogHeader>Tutorials</BlogHeader>
              {posts.map(post => (
                <PostPreview key={post.slug} post={post} />
              ))}
            </BlogContainer>
          </BlogCol>
          <Col />
        </Row>
      </Layout>
    </>
  );
};
