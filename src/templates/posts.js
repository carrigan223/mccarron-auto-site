import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Readlink from '../components/read-link';
import { Container, Row, Col } from 'react-bootstrap';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostPage = styled('div')`
  padding: 2rem;
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Container fluid>
      <Row>
        <Col />
        <Col xs={12} md={6}>
          <PostPage>
            <h1>{post.frontmatter.title}</h1>
            <p
              css={css`
                font-size: 0.75rem;
                font-family: 'Oswald';
              `}
            >
              Posted by {post.frontmatter.author}
            </p>
            <MDXRenderer>{post.body}</MDXRenderer>
            <div>
              <Readlink to="/">&larr; Back to all posts</Readlink>
            </div>
          </PostPage>
        </Col>
        <Col />
      </Row>
    </Container>
  </Layout>
);

export default PostTemplate;
