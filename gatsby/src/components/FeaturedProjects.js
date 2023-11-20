import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from './devices';

const FWStyle = styled.section`
    h2 {
        font-size: 0.875rem;
        color: black;
        text-transform: uppercase;

        &:after {
            display: block;
            content: ' ';
            width: 66px;
            height: 2px;
            background: black;
            margin: 2rem 0 2.5rem 0;
        }

        @media ${device.tablet} {
            font-size: 1.125rem /* 18/16 */;

            &::after {
                margin: 2rem 0 2.5rem 0;
            }
        }
    }

    .fw-container {
        @media screen and (min-width: 1100px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 45px;
        }
    }
    .fw-project {
        .gatsby-image-wrapper {
            border-radius: 10px;
            margin-bottom: 20px;
        }

        h3 {
            color: black;
            font-size: 9vw;
            line-height: 1.2;
            letter-spacing: -1px;
            margin: 0;

            font-family: 'Crimson Pro', serif;
            font-weight: 300;
        }

        p {
            font-size: 5.25vw;
            line-height: 1.2;
            color: #66635b;
            margin: 0;
            margin-bottom: 55px;
        }

        @media ${device.tablet} {
            display: flex;
            margin-bottom: 35px;

            .gatsby-image-wrapper {
                margin-bottom: 3vh;
            }

            h3 {
                font-size: 2.2rem;
                line-height: 1.2;
                margin-bottom: 0.5em;
            }

            p {
                font-size: 1.5rem;
                line-height: 1.2;
            }
        }

        @media ${device.desktopL} {
            img {
                width: 100%;
            }
            flex-direction: column;
            max-width: 530px;
        }
    }
`;

export default function FeaturedProjects() {
    return (
        <FWStyle>
            <h2>Featured Work</h2>
            <div className="fw-container">
                <div className="fw-project">
                    <p>hello world</p>
                </div>
            </div>
        </FWStyle>
    );
}
