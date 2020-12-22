import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Readlink from '../components/read-link';

const BlogArticle = styled.article`
  border-bottom: 1px solid #ddd;
  margin-top: 0.75rem;
  padding-bottom: 1rem;

  :first-of-type {
    margin-top: 1rem;
  }
`;

const PostPreview = ({ post }) => (
  <BlogArticle>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
      <p>{post.excerpt}</p>
      <Readlink to={post.slug}>&rarr; Read this post</Readlink>
    </h3>
  </BlogArticle>
);

export default PostPreview;
