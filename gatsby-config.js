module.exports = {
  siteMetadata: {
    title: `McCarron Automotive`,
    description: `The Berskhires most dependable stop for auto care`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-emotion',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-remark-embed-video',
      options: {
        width: 800,
        ratio: 1.77,
        height: 400,
        related: false,
        noIframeBorder: true,
      },
    },
    {
      resolve: `gatsby-remark-responsive-iframe`,
      options: { maxWidth: 590 },
    },
    {
      resolve: `gatsby-remark-responsive-iframe`,
      options: {
        wrapperStyle: `margin-bottom: 1.0725rem`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Racing Sans One`, `Oswald`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout`),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `images`,
      },
    },
  ],
};
