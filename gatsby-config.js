module.exports = {
  siteMetadata: {
    title: `McCarron Automotive`,
    description: `The Berskhires most dependable stop for auto care`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Racing Sans One`],
        display: 'swap',
      },
    },
  ],
};
