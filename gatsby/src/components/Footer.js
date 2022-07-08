import React from 'react';
import styled from 'styled-components';
import { device } from './devices';

const FooterStyle = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   margin-top: 10vh;

   padding-top: 20px;
   padding-bottom: 40px;

   background: white;
   font-size: 4vw;

   @media ${device.tablet} {
      font-size: 1.25rem;
   }

   address {
      font-style: normal;
      margin-bottom: 10vh;
   }

   h2,
   p {
      margin: 0;
   }

   h2 {
      font-size: 7vw;
      color: var(--purple);
      letter-spacing: -1px;

      @media screen and (min-width: 768px) {
         font-size: 2.2em;
      }
   }
`;

export default function Footer() {
   return (
      <FooterStyle>
         <address>
            <h2>Want to chat?</h2>
            <p>Shoot me an email at me@mrco.design.</p>
            <p>I&lsquo;d love to hear from you!</p>
         </address>

         <p>&copy; {new Date().getFullYear()} Marcio Morgado.</p>
      </FooterStyle>
   );
}
