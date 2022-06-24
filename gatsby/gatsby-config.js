module.exports = {
    siteMetadata: {
        title: `Marcio Morgado - Portfolio`,
        siteUrl: `https://www.mrco.design`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-anchor-links`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: { offset: -100 },
        },
    ],
};
