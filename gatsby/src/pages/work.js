import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const WorkStyle = styled.section`
   margin-top: 15vh;
   position: relative;

   #sidebar{
      width: 320px;
      position: fixed;

      .credits{
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         list-style: none;
         padding: 0;
         li{
            margin-bottom: 10px;
         }
         span{
            display: block;
            text-transform: uppercase;
            font-size: 14px;
         }
      }
   }

   #slides{
      margin-left: 340px;
      ul{
         display: grid;
         grid-template-columns: repeat(6, 1fr);
         grid-column-gap: 15px;
         grid-row-gap: 45px;
         list-style:none;        
      }
   }
`

export default function WorkPage() {
   return (
      <WorkStyle>
         <div id="sidebar" className="work-info">
           <h1>Canada Post: Spring Series — Pansies</h1>

            <div className="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia lobortis vestibulum. Suspendisse ut faucibus nisl, sed gravida neque. Vivamus nunc urna, sodales ac egestas vel, dignissim sit amet metus. Phasellus tincidunt, elit at maximus consectetur, nisi eros volutpat ex, at convallis nisi justo et eros. Donec nec accumsan quam.</p></div>
            <ul className="credits">
               <li><span className='title'>{'{ Project }'}</span>Spring Series 2015</li>
               <li><span className='title'>{'{ Client }'}</span>Canada Post</li>
               <li><span className='title'>{'{ Studio }'}</span>HM&#38;E Design</li>
               <li><span className='title'>{'{ Creative Director }'}</span>Paul Haslip</li>
               <li><span className='title'>{'{ My Role }'}</span>Design &#38; Production</li>
            </ul>
         </div>

         {/*End of sidebar*/}
         <div id="slides" className="work-images">
            <ul>
               <li style={{gridColumn: '1 / span 3'}}><StaticImage src="../images/pansies/stamp-booklet.jpg" alt="" placeholder="blurred" /></li>
               <li style={{gridColumn: '4 / span 2'}}><StaticImage src="../images/pansies/stamp.jpg" alt="" placeholder="blurred"/></li>
               <li style={{gridColumn: '1 / span 4'}}><StaticImage src="../images/pansies/souvenir-sheet.jpg" alt="" placeholder="blurred" /></li>
               <li style={{gridColumn: '5 / span 2'}}><StaticImage src="../images/pansies/coil-stamp.jpg" alt="" placeholder="blurred" /></li>
               <li style={{gridColumn: '1 / span 6'}}><StaticImage src="../images/pansies/ofdc.jpg" alt="" placeholder="blurred" /></li>
            </ul>
         </div>
      </WorkStyle>
   );
}
