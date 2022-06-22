import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeaderStyle = styled.header`
    padding-top: 30px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: var(--cream);
    display: flex;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    box-shadow: inset 0px -1px 0px rgba(102, 99, 91, 0.3);
    font-size: 1.5rem;
    padding: 1.8em 7.5vw;
    color: hsl(237, 39%, 44%);

    nav {
        display: flex;
        justify-content: flex-end;
        animation: none;
        background: none;
        position: initial;
        width: initial;
    }

    li {
        display: inline-block;
    }

    li + li::before {
        content: "/";
        padding: 0 7px 0 5px;
    }

    nav ul:nth-child(2) {
        margin-left: 6vw;
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
    return (
        <>
            <HeaderStyle>
                <LinkStyle to="/">Marcio Morgado Logo</LinkStyle>

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
                            <a
                                href="https://www.twitter.com/marciomorgado"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/marciomorgado"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </nav>
            </HeaderStyle>
        </>
    );
}

//Old Code
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

/*New Condensed code
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
