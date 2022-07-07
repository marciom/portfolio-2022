import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import { device } from './devices';

const HeaderStyle = styled.header`
   --padding-top-bottom: 2vh;

   width: 100vw;
   display: flex;
   flex-direction: column;
   align-items: center;

   position: fixed;
   top: 0;
   z-index: 1;

   padding-top: var(--padding-top-bottom);
   padding-bottom: var(--padding-top-bottom);

   background: transparent;
   color: hsl(226, 22%, 20%);

   font-size: 4vw;

   @media screen and (min-width: 569px) {
      --padding-top-bottom: 15px;

      flex-direction: row;
      justify-content: space-between;
      font-size: 2vw;
   }

   @media ${device.desktop} {
      font-size: 1.5em;
   }

   &.scroll {
      background: var(--cream);
      box-shadow: inset 0px -1px 0px rgba(102, 99, 91, 0.3);
   }

   nav {
      @media screen and (min-width: 569px) {
         display: flex;
         flex-direction: row;

         & ul:nth-child(2) {
            margin-left: 3vw;
         }
      }

      ul {
         text-align: center;
         line-height: 1;
      }

      li {
         display: inline-block;

         & a:hover {
            color: hsl(237, 39%, 44%);
            border-bottom: 1px solid var(--purple);
         }

         & a {
            text-decoration: none;
         }
      }

      li + li::before {
         content: '/';
         padding: 0 7px 0 5px;
      }

      @media ${device.desktop} {
         & ul:nth-child(2) {
            margin-left: 6vw;
         }
      }
   }
`;

const LinkStyle = styled(Link)`
   color: inherit;
   text-decoration: none;

   &.active,
   &:hover {
      border-bottom: 1px solid var(--purple);
   }
`;

export default function Nav() {
   // navbar scroll active state
   const [navbar, setNavBar] = useState(false);

   const changeBackground = () => {
      if (window.scrollY >= 50) {
         setNavBar(true);
      } else {
         setNavBar(false);
      }
   };

   useEffect(() => {
      changeBackground();
      window.addEventListener('scroll', changeBackground);
   });

   return (
      <HeaderStyle className={navbar ? 'scroll' : ''}>
         <Logo />
         <nav>
            <ul>
               <li>
                  <LinkStyle to="/" activeClassName="active">
                     Home
                  </LinkStyle>
               </li>
               <li>
                  <LinkStyle to="/about-me" activeClassName="active">
                     About
                  </LinkStyle>
               </li>
               <li>
                  <LinkStyle to="/work/" activeClassName="active">
                     Work
                  </LinkStyle>
               </li>
               <li>
                  <LinkStyle to="/contact" activeClassName="active">
                     Contact
                  </LinkStyle>
               </li>
            </ul>

            <ul>
               <li>
                  <a href="https://www.twitter.com/marciomorgado" target="_blank" rel="noreferrer">
                     Twitter
                  </a>
               </li>
               <li>
                  <a href="https://www.linkedin.com/in/marciomorgado" target="_blank" rel="noreferrer">
                     LinkedIn
                  </a>
               </li>
            </ul>
         </nav>
      </HeaderStyle>
   );
}

// Old Code
// function NavLink({ className, children, ...props }) {
//     return (
//         <Link getProps={isActive(className)} {...props}>
//             {children}
//         </Link>
//     );
// }

// function isActive(className) {
//     const a = function ({ isPartiallyCurrent }) {
//         const activeClassName = { className: `${className} active` };

//         if (isPartiallyCurrent) return activeClassName;
//         return { className };
//     };

//     return a;
// }

/* New Condensed code
const NavLink = ({ className, children, ...props }) => (
    <Link getProps={isActive(className)} {...props}>
        {children}
    </Link>
);

const isActive =
    (className) =>
    ({ isPartiallyCurrent, isCurrent }) => {
        const activeClassName = { className: `${className} active` };

        return isCurrent || isPartiallyCurrent
            ? activeClassName
            : { className };
    };

const StyledNavLink = styled(NavLink)`
    font-size: 1.3rem;
    text-decoration: none;

    
`;
*/
