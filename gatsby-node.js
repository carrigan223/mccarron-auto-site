exports.createPages = async ({ actions, graphql, reporter }) => {
  //remember when in a node graphql is a function call
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
      actions.createPage({
          path: post.frontmatter.slug,
          component: require.resolve('./src/templates/posts.js'),
          context: {
              slug: post.frontmatter.slug,
          }
      })
  });
};
