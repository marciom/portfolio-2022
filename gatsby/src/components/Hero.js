import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const HeroStyle = styled.section`
   margin-top: 30vh;
   margin-bottom: 20vh;

   h1 {
      color: var(--purple);
      font-size: 10.96vw;
      line-height: 12vw;
      letter-spacing: -0.03em;
      margin-bottom: 15px;
   }

   p {
      font-size: 6.5vw;
      line-height: 7.75vw;
      color: #979797;
      letter-spacing: -0.055rem;
      margin-bottom: 15px;
   }

   @media screen and (min-width: 768px) {
      margin-top: 20vh;

      p {
         font-size: 2.325rem /* 34/16 */;
         line-height: 3rem;
         letter-spacing: -1.5px;
      }
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
