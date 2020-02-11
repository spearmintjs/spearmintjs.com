module.exports = {
  siteMetadata: {
    title: 'spearmint.js',
    author: 'spearmint',
    description: 'a simpler way to test your React',
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
        icon: 'src/assets/images/favicon.ico',
      },

      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-107312161-2',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'spearmintjs.com',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
