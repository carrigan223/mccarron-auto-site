import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Readlink from '../components/read-link';

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
      <Readlink to="/">&larr; Back to all posts</Readlink>
    </PostPage>
  </Layout>
);

export default PostTemplate;
