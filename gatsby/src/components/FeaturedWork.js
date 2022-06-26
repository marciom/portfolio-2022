import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const FWStyle = styled.section`
   h2 {
      font-size: 0.875rem;
      color: var(--purple);
      text-transform: uppercase;

      &:after {
         display: block;
         content: ' ';
         width: 66px;
         height: 2px;
         background: black;
         margin: 2rem 0 2.5rem 0;
      }

      @media screen and (min-width: 768px) {
         font-size: 1.125rem /* 18/16 */;
         font-size: large;

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
      img {
         border-radius: 10px;
         margin-bottom: 20px;
      }

      h3 {
         color: var(--purple);
         font-size: 7vw;
         line-height: 10.5vw;
         letter-spacing: -1px;
         margin: 0;
         margin-bottom: 15px;
      }

      p {
         font-size: 6vw;
         line-height: 8.25vw;
         color: #66635b;
         margin: 0;
         margin-bottom: 55px;
      }

      @media screen and (min-width: 768px) {
         display: flex;
         margin-bottom: 35px;

         img {
            width: 340px;
            margin-bottom: 15px;
         }

         h3 {
            font-size: 2.2rem /* 42/16 */;
            line-height: 2.75rem /* 44/16 */;
         }

         p {
            font-size: 1.5rem /* 24/16 */;
            line-height: 1.75rem /* 28/16 */;
         }
      }

      @media screen and (min-width: 1100px) {
         img {
            width: 100%;
         }
         flex-direction: column;
         max-width: 530px;
      }
   }
`;

export default function FeaturedWork() {
   return (
      <FWStyle id="work">
         <h2>Featured Work</h2>
         <div className="fw-container">
            <div className="fw-project">
               <StaticImage src="../images/Pansies-thumbnail.jpg" alt="" placeholder="blurred" />

               <h3 className="serif">Canada Post Spring Series: Pansis</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis semper libero, luctus.</p>
            </div>
            <div className="fw-project">
               <StaticImage src="../images/Quandl-thumbnail.jpg" alt="" placeholder="blurred" />

               <h3>Canada Post Spring Series: Pansis</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis semper libero, luctus.</p>
            </div>
            <div className="fw-project">
               <StaticImage src="../images/Vector-thumbnail.jpg" alt="" placeholder="blurred" />

               <h3>Canada Post Spring Series: Pansis</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis semper libero, luctus.</p>
            </div>
         </div>
      </FWStyle>
   );
}
