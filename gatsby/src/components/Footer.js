import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
   background: white;
   margin-top: 10vh;

   padding-top: 20px;
   padding-bottom: 40px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   font-size: 1.5rem /* 24/16 */;

   address {
      margin-bottom: 10vh;
   }

   h2,
   p {
      margin: 0;
   }

   h2 {
      font-size: 10vw;
      color: var(--purple);
      letter-spacing: -1px;

      @media screen and (min-width: 768px) {
         font-size: 2.34em /* 56/16 */;
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
