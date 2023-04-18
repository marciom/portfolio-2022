import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { device } from './devices';

const ProjectsStyle = styled.section`
    h2 {
        font-size: 1.2rem;
        color: black;
        text-transform: uppercase;
        margin: 0;

        &:after {
            display: block;
            content: ' ';
            width: 66px;
            height: 2px;
            background: black;
            margin: 1.15em 0 1.35em 0;
        }

        @media ${device.tablet} {
            grid-column: span 2;
            font-size: 1.125rem /* 18/16 */;

            &::after {
                margin: 2rem 0 2.5rem 0;
            }
        }

        @media ${device.desktop} {
            grid-column: span 3;
        }
    }

    .projectContainer {
        display: grid;
        grid-template-columns: repeat(
            auto-fit,
            minmax(max(300px, calc(100% / 4)), 1fr)
        );

        @media ${device.tablet} {
            column-gap: 26px;
            row-gap: 30px;
        }
        .gatsby-image-wrapper {
            display: none;
        }

        .content {
            &::after {
                content: ' ';
                display: block;
                width: 100%;
                height: 1px;
                background: black;
                margin: 1.25rem 0;
            }

            .title {
                font-size: 10vw;
                line-height: 10vw;
                color: black;
                margin: 0;
            }

            .tags {
                font-size: 1rem;
                line-height: 1.2rem;
                margin: 10px 0;
            }
        }

        @media ${device.tablet} {
            .gatsby-image-wrapper {
                display: block;
                margin-bottom: 15px;
            }

            .content {
                &::after {
                    content: none;
                }

                .title {
                    font-size: 2.25rem;
                    line-height: 2.25rem;
                    margin: 0;
                }

                .tags {
                    margin: 5px 0;
                }
            }
        }
    }
`;

function SingleWork({ project }) {
    return (
        <div className="projectItem">
            <div className="content">
                <GatsbyImage
                    image={
                        project.thumbnail.localFile.childImageSharp
                            .gatsbyImageData
                    }
                    alt=""
                />
                <Link to={`work/${project.slug}`}>
                    <h3>{project.title}</h3>
                </Link>
            </div>
        </div>
    );
}

export default function Projects() {
    const data = useStaticQuery(graphql`
        query {
            allStrapiWork(filter: { isFeatured: { eq: false } }) {
                nodes {
                    id
                    title
                    slug
                    isFeatured
                    thumbnail {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED)
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <ProjectsStyle>
            <h2 id="work">Projects</h2>

            <div className="projectContainer">
                {data.allStrapiWork.nodes.map((work) => (
                    <SingleWork project={work} key={work.id} />
                ))}
            </div>
        </ProjectsStyle>
    );
}
