module.exports = {
  siteMetadata: {
    title: 'spearmint.js',
    author: 'spearmint',
    description: 'React testing. Without the headaches.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'spearmint.js',
        short_name: 'spearmint',
        start_url: '/',
        background_color: '#02C2C3',
        theme_color: '#02C2C3',
        display: 'minimal-ui',
        icon: 'src/assets/images/spearmint.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
