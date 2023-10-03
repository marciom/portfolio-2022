import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const strapiConfig = {
    apiURL: process.env.STRAPI_API_URL,
    accessToken: process.env.STRAPI_TOKEN,
    collectionTypes: ['user', 'work'],
    singleTypes: [],
};

export default {
    siteMetadata: {
        title: `Marcio Morgado - Portfolio`,
        siteUrl: `https://www.mrco.design`,
    },
    plugins: [
        'gatsby-plugin-styled-components',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: { offset: -100 },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: strapiConfig,
        },
    ],
};
