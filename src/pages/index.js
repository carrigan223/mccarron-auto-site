import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import UsePosts from '../hooks/use-posts';

const BlogHeader = styled.h2`
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export default () => {
  const posts = UsePosts();
  return (
    <Layout>
      <h1>McCarron Auto</h1>
      <h3>The berskhires most trusted source for auto repairs</h3>
      <Link to="/about">&rarr; go to about me</Link>

      <BlogHeader>Blog</BlogHeader>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
