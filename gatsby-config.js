module.exports = {
  siteMetadata: {
    siteTitle: `HOLD BTC 100`,
    defaultTitle: `HOLD BTC 100`,
    siteTitleShort: `HOLD BTC`,
    siteDescription: `Projeto HOLD BTC, vamos aproveitar a valorização no longo prazo`,
    siteUrl: `https://docsholdbtc.netlify.com`,
    siteAuthor: `@_felipesuri`,
    siteLanguage: `pt-br`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/felipesuri/docs-hold-btc`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HOLD BTC`,
        short_name: `BOLD BTC`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
	path: `${__dirname}/static/img`
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docsholdbtc.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
