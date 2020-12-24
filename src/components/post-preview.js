import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Readlink from '../components/read-link';

const BlogArticle = styled.article`
  border-bottom: 1px solid #ddd;
  display: flex;
  margin-top: 0;
  padding-bottom: 1rem;

  :first-of-type {
    margin-top: 1rem;
  }
`;

const ImageLink = styled(Link)`
  margin: 1rem 1rem 0 0;
  width: 100px;
`;

const PostPreview = ({ post }) => (
  <BlogArticle>
    <ImageLink to={post.slug}>
      <Image
        fluid={post.image.sharp.fluid}
        css={css`
          * {
            margin-top: 0;
          }
        `}
        alt={post.title}
      />
    </ImageLink>
    <div css={css`padding-top: 1rem;`}>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Readlink to={post.slug}>&rarr; Read this post</Readlink>
    </div>
  </BlogArticle>
);

export default PostPreview;
