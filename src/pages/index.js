import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>McCarron Auto</h1>
    <h3>The berskhires most trusted source for auto repairs</h3>
    <Link to="/about">&rarr; go to about me</Link>
  </Layout>
);
