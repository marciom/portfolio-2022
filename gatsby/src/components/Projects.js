import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
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
      grid-template-columns: repeat(auto-fit, minmax(max(300px, calc(100% / 4)), 1fr));

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
export default function Projects() {
   return (
      <ProjectsStyle>
         <h2>Projects</h2>
         <div className="projectContainer">
            <div className="projectItem">
               <StaticImage src="../images/placeholder.jpg" alt="" placeholder="blurred" />

               <div className="content">
                  <h3 className="title serif">SRI Magazine</h3>
                  <p className="tags">Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
            <div className="projectItem">
               <StaticImage src="../images/placeholder.jpg" alt="" placeholder="blurred" />

               <div className="content">
                  <h3 className="title serif">SRI Magazine</h3>
                  <p className="tags">Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
            <div className="projectItem">
               <StaticImage src="../images/placeholder.jpg" alt="" placeholder="blurred" />

               <div className="content">
                  <h3 className="title serif">SRI Magazine</h3>
                  <p className="tags">Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
            <div className="projectItem">
               <StaticImage src="../images/placeholder.jpg" alt="" placeholder="blurred" />

               <div className="content">
                  <h3 className="title serif">SRI Magazine</h3>
                  <p className="tags">Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
            <div className="projectItem">
               <StaticImage src="../images/placeholder.jpg" alt="" placeholder="blurred" />

               <div className="content">
                  <h3 className="title serif">SRI Magazine</h3>
                  <p className="tags">Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
            <div className="projectItem">
               <StaticImage src="../images/placeholder.jpg" alt="" placeholder="blurred" />

               <div className="content">
                  <h3 className="title serif">SRI Magazine</h3>
                  <p className="tags">Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
         </div>
      </ProjectsStyle>
   );
}
