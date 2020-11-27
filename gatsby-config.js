module.exports = {
  siteMetadata: {
    title: `Adam Azad`,
    siteUrl: `https://adamazad.com`,
    description: `Homepage of Sulaimani-based leader, speaker, and web developer Adam Azad.`,
    keywords: `software engineer,blockchain,ethereum,bitcoin,decentralized finance,defi,full stack engineer,full stack developer,react,typescript,javascript,node.js`,
    author: `@adamzazad`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-63644580-1`,
        head: false,
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          /* Google fonts */
          `Karla`,
          `Rubik`,
          `Open Sans\:400;600;700`,
        ],
        display: 'swap',
      },
    },
  ],
}
