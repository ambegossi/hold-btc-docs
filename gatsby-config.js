module.exports = {
  siteMetadata: {
    siteTitle: `HOLD BTC 100`,
    defaultTitle: `HOLD BTC 100`,
    siteTitleShort: `HOLD BTC`,
    siteDescription: `Projeto HOLD BTC, vamos aproveitar a valorização no longo prazo`,
    siteUrl: `https://rocketdocs.netlify.com`,
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
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
