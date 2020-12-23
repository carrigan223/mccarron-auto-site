import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import UsePosts from '../hooks/use-posts';
import Hero from '../components/hero';

const BlogHeader = styled.h2`
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const BlogContainer = styled('div')`
  margin: 2rem auto 4rem;
  max-width: 90vw;
  width: 850px; //this controls the width the post are taking up
`;

export default () => {
  const posts = UsePosts();
  return (
    <>
      <Layout>
        <Hero />
        <BlogContainer>
          <BlogHeader>Blog</BlogHeader>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </BlogContainer>
      </Layout>
    </>
  );
};
