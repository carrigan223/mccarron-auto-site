import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import UsePosts from '../hooks/use-posts';
import SquareButton from '../components/square-button';
import { Row, Col } from 'react-bootstrap';

const BlogCol = styled('Col')``;

const BlogHeader = styled('h1')`
  font-size: 2.5rem;
  font-family: 'Racing Sans One';
  padding-top: 2rem;
  padding-bottom: 1rem;
  color: black;
  padding: 1rem;
`;

const BlogContainer = styled('div')`
  margin: 2rem auto 4rem;
  max-width: 90vw;
  padding: 1rem;
  margin-right: 1rem;
  padding-bottom: 2.5rem;
`;

const InfoContainer = styled('div')`
  margin: 2rem auto 4rem;
  max-width: 90vw;
  padding: 1rem;
  font-family: 'Oswald';
`;

export default () => {
  const posts = UsePosts();
  return (
    <>
      <Layout>
        <Row>
          <InfoContainer>
            <BlogHeader>Tutorials</BlogHeader>
            <p>
              For the all the gearheads we have various instructional videos
              <br />
              presented by certified automotive teacher Mike McCarron. Feel
              <br />
              free to take advantage of our great educational materials,
              <br />
              and feel free to contact us and request any additional concepts or
              <br />
              with any questions.
            </p>
            <SquareButton to="/contact"><text css={css`padding: 1rem;`}>Contact Us</text></SquareButton>
          </InfoContainer>
          <BlogCol>
            <BlogContainer>
              {posts.map(post => (
                <PostPreview key={post.slug} post={post} />
              ))}
            </BlogContainer>
          </BlogCol>
        </Row>
      </Layout>
    </>
  );
};
