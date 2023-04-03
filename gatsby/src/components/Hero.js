import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { device } from './devices';

const HeroStyle = styled.section`
   margin-top: 25vh;
   margin-bottom: 10vh;

   h1 {
      color: black;
      font-size: 10vw;
      line-height: 1.2;
      letter-spacing: -0.03em;
      margin-bottom: 15px;
   }

   p {
      font-size: 6vw;
      line-height: 1.4;
      color: black;
      margin-bottom: 15px;
   }

   @media ${device.tablet} {
      h1 {
         font-size: 10vw;
      }
      p {
         font-size: 2rem;
         line-height: 1.3;
      }
   }

   @media ${device.desktop} {
      margin-top: 20vh;
   }

   @media screen and (min-width: 1100px) {
      max-width: 1200px;
      h1 {
         font-size: 7vw;
         line-height: 7.5vw;
      }

      p {
         font-size: 3rem /* 48/16 */;
         line-height: 3.5rem;
      }
   }
`;

export default function Hero() {
   return (
      <HeroStyle>
         <h1 className="serif">
            Hey, folks!
            <br />
            I’m Marcio Morgado.
         </h1>
         <p>I’m a versatile designer fuelled by collaboration, curiosity, craftsmanship and coffee.</p>
         <p>
            Check out my most{' '}
            <AnchorLink to="/#work" className="test">
               {' '}
               recent projects below{' '}
            </AnchorLink>
            , look over{' '}
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
