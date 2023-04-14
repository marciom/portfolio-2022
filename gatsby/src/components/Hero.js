import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { device } from './devices';

const HeroStyle = styled.section`
    margin-top: 25vh;
    margin-bottom: 10vh;

    h1 {
      color: black;
      font-size: 20px;
      line-height: 1.2;
    }

    .intro {
      width: 635px;
      font-size: 49px;
      line-height: 1.4;
      color: #6E7E85;
      
      span{
         color: black;
      }
    }

    p{
      font-size: 20px;
    }

    /* @media ${device.tablet} {
        h1 {
            font-size: 10vw;
        }
        p {
            font-size: 2rem;
            line-height: 1.3;
        }
    } */

    @media ${device.desktop} {
        margin-top: 311px;
    }

    /* @media screen and (min-width: 1100px) {
        max-width: 1200px;
        h1 {
            font-size: 7vw;
            line-height: 7.5vw;
        }

        p {
            font-size: 3rem /* 48/16 */;
            line-height: 3.5rem;
        }
    } */
`;

export default function Hero() {
    return (
        <HeroStyle>
            <h1>Hey, folks!</h1>
            <p className="intro">
                <span>I’m Marcio Morgado,</span> a collaborative designer who
                enjoys learning and creating with a steady flow of coffee.
            </p>
            <p>
                Check out my
                <AnchorLink to="/#work" className="test">
                    {' '}
                    latest project{' '}
                </AnchorLink>
                below, view my{' '}
                <AnchorLink to="/#work" className="test">
                    my resume
                </AnchorLink>
                , or just say{' '}
                <AnchorLink to="/#work" className="test">
                    hey
                </AnchorLink>
                .
            </p>
        </HeroStyle>
    );
}
