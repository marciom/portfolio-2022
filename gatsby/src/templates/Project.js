import React, { useRef, useEffect, useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const WorkStyle = styled.section`
    margin-top: 12vh;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 15px;

    #sidebar {
        width: 328px;
        height: fit-content;
        position: sticky;
        top: 180px;

        ::before {
            content: ' ';
            display: block;
            height: 2px;
            background: var(--black);
            margin-bottom: 14px;
        }

        .credits {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        h1 {
            font-size: 25px;
            margin-bottom: 23px;
        }
        p {
            font-size: 16px;
        }
    }

    #workImages {
        width: 822px;
        position: relative;

        display: flex;
        flex-wrap: wrap;
        gap: 30px 15px;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .workNav {
        /* background-color: cyan; */
        display: flex;
        justify-content: space-between;
        color: var(--grey);
        flex-wrap: wrap;

        ::before {
            content: ' ';
            display: block;
            width: 100%;
            height: 1px;
            transform: scaleY(0.5);
            background-color: var(--black);
            margin: 15px 0;
        }

        a {
            text-decoration: none;
        }

        .colorSep a:first-child {
            color: var(--grey);
            ::after {
                content: '/';
                padding: 0 7px 0 7px;
            }
        }

        div {
            color: var(--black);
            display: inline-block;
        }
    }
`;

export default function SingleProjectPage({ data, pageContext }) {
    const prev = pageContext.prev
        ? { url: `/work/${pageContext.prev.slug}` }
        : null;
    const next = pageContext.next
        ? { url: `/work/${pageContext.next.slug}` }
        : null;

    const navBlock = useRef(0);

    useEffect(() => {
        navBlock.current.children.length === 2
            ? navBlock.current.classList.add('colorSep')
            : navBlock.current.classList.remove('colorSep');
    }, []);

    return (
        <WorkStyle>
            <div id="sidebar" className="work-info">
                <h1>{data.strapiWork.title} </h1>

                <div className="content">
                    <p>{data.strapiWork.description.data.description}</p>
                </div>

                <ReactMarkdown className="credits">
                    {data.strapiWork.credits.credit.data.credit.replace(
                        /\n/gi,
                        '  \n'
                    )}
                </ReactMarkdown>

                <div className="workNav">
                    <Link to="/#work">Back to work</Link>

                    <div ref={navBlock}>
                        {prev && <Link to={prev.url}>Prev</Link>}

                        {next && <Link to={next.url}>Next</Link>}
                    </div>
                </div>
            </div>
            {/* END OF SIDEBAR */}

            <ul id="workImages">
                {data.strapiWork.images.map((image) => (
                    <li key={image.localFile.childImageSharp.id}>
                        <GatsbyImage
                            image={
                                image.localFile.childImageSharp.gatsbyImageData
                            }
                            alt=""
                        />
                    </li>
                ))}
            </ul>
        </WorkStyle>
    );
}

export const query = graphql`
    query ($slug: String!) {
        strapiWork(slug: { eq: $slug }) {
            slug
            title
            description {
                data {
                    description
                }
            }
            credits {
                credit {
                    data {
                        credit
                    }
                }
            }
            images {
                localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                        id
                    }
                }
            }
        }
    }
`;
