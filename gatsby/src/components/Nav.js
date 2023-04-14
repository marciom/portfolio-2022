import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import { device } from './devices';

const HeaderStyle = styled.header`
    --padding-top-bottom: 3vh;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 2;

    padding-top: var(--padding-top-bottom);
    padding-bottom: var(--padding-top-bottom);

    background: transparent;
    color: var(--black);

    font-size: 13px;
    text-transform: uppercase;

    @media screen and (min-width: 569px) {
        --padding-top-bottom: 15px;

        flex-direction: row;
        justify-content: space-between;
    }

    &.scroll {
        background: var(--offwhite);
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

            & a:hover,
            .active {
                color: var(--black);
                border-bottom: 1px solid var(--black);
                font-weight: bold;
            }

            & a {
                text-decoration: none;
            }

            & .active {
                font-weight: bold;
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
                        <Link to="/" activeClassName="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-me" activeClassName="active">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/work/" activeClassName="active">
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active">
                            Contact
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a
                            href="https://www.twitter.com/marciomorgado"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/marciomorgado"
                            target="_blank"
                            rel="noreferrer"
                        >
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
