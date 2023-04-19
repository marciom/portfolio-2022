import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-P5XC2TQ',

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                routeChangeEventName: 'portfolio-route-change',
                // Defaults to false
                enableWebVitalsTracking: true,
            },
        },
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
                accessToken: process.env.STRAPI_TOKEN,
                collectionTypes: [
                    {
                        singularName: 'work',
                        queryParams: {
                            populate: {
                                credits: '*',
                                seo: '*',
                                thumbnail: '*',
                                images: '*',
                                social: {
                                    populate: {
                                        socialIMG: '*',
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        },
    ],
};