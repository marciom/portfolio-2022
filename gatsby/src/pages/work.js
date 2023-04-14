import React from 'react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

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
        div {
            display: inline-block;

            a:first-child::after {
                content: '/';
                padding: 0 7px 0 7px;
            }

            a:nth-child(2) {
                color: var(--black);
            }
        }
    }
`;

export default function WorkPage() {
    return (
        <WorkStyle>
            <div id="sidebar" className="work-info">
                <h1>Canada Post: Spring Series 2015 Pansies </h1>

                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam lacinia lobortis vestibulum. Suspendisse ut
                        faucibus nisl, sed gravida neque. Vivamus nunc urna,
                        sodales ac egestas vel, dignissim sit amet metus.
                        Phasellus tincidunt, elit at maximus consectetur, nisi
                        eros volutpat ex, at convallis nisi justo et eros. Donec
                        nec accumsan quam.
                    </p>
                </div>

                <ul className="credits">
                    <li>Client: Canada Post</li>
                    <li>Creative director: Paul Haslip</li>
                    <li>Designers: Paul Haslip, Marcio Morgado</li>
                    <li>Illustrator: Laurie Koss</li>
                    <li>Printer: Lowe-Martin</li>
                    <li>
                        Deliverables:{' '}
                        <ul>
                            <li>Domestic & International Stamp</li>
                            <li>Stamp Booklet</li>
                            <li>First Day Cover</li>
                            <li>Cancellation Mark</li>
                            <li>Souvenir Sheet</li>
                        </ul>
                    </li>
                </ul>
                <div className="workNav">
                    <Link to="/#work">Back to work</Link>
                    <div>
                        <Link to="#">Prev</Link>
                        <Link to="#">Next</Link>
                    </div>
                </div>
            </div>
            {/* End of sidebar */}

            <ul id="workImages">
                <li>
                    <StaticImage src="../images/pansies/stamp-booklet.jpg" />
                </li>
                <li>
                    <StaticImage src="../images/pansies/stamp.jpg" />
                </li>
                <li>
                    <StaticImage src="../images/pansies/souvenir-sheet.jpg" />
                </li>
                <li>
                    <StaticImage src="../images/pansies/coil-stamp.jpg" />
                </li>
                <li>
                    <StaticImage src="../images/pansies/ofdc.jpg" />
                </li>
            </ul>
        </WorkStyle>
    );
}
