import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { device } from './devices';

const ProjectsStyle = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   column-gap: 26px;
   row-gap: 30px;

   h2 {
      grid-column: auto / span minmax(1, 2);
   }

   .projectContainer {
      img {
         display: none;
      }

      .conc {
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
            color: $purple;
            margin: 0;
         }

         .tags {
            font-size: 1rem;
            line-height: 1.2rem;
            margin: 10px 0;
         }
      }

      @media ${device.tablet} {
         img {
            display: block;
            margin-bottom: 15px;
         }

         .conc {
            &::after {
               content: none;
            }

            .title {
               font-size: 2.25rem /* 36/16 */;
               line-height: 2.25rem /* 36/16 */;
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
               {/* <StaticImage src="https://via.placeholder.com/522x377" alt="" placeholder="blurred" /> */}

               <div>
                  <h3>SRI Magazine</h3>
                  <p>Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
         </div>
         <div className="projectContainer">
            <div className="projectItem">
               {/* <StaticImage src="https://via.placeholder.com/522x377" alt="" placeholder="blurred" /> */}

               <div>
                  <h3>SRI Magazine</h3>
                  <p>Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
         </div>
         <div className="projectContainer">
            <div className="projectItem">
               {/* <StaticImage src="https://via.placeholder.com/522x377" alt="" placeholder="blurred" /> */}

               <div>
                  <h3>SRI Magazine</h3>
                  <p>Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
         </div>
         <div className="projectContainer">
            <div className="projectItem">
               {/* <StaticImage src="https://via.placeholder.com/522x377" alt="" placeholder="blurred" /> */}

               <div>
                  <h3>SRI Magazine</h3>
                  <p>Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
         </div>
         <div className="projectContainer">
            <div className="projectItem">
               {/* <StaticImage src="https://via.placeholder.com/522x377" alt="" placeholder="blurred" /> */}

               <div>
                  <h3>SRI Magazine</h3>
                  <p>Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
         </div>
         <div className="projectContainer">
            <div className="projectItem">
               {/* <StaticImage src="https://via.placeholder.com/522x377" alt="" placeholder="blurred" /> */}

               <div>
                  <h3>SRI Magazine</h3>
                  <p>Editorial, Illustration, Layout, Photo</p>
               </div>
            </div>
         </div>
      </ProjectsStyle>
   );
}
