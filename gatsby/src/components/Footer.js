import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from './devices';

const FooterStyle = styled.footer`
    display: flex;
    margin-top: 5vh;
    justify-content: space-between;

    padding-top: 20px;
    padding-bottom: 40px;

    background: var(--offwhite);
    font-size: 13px;
    border-top: solid 1px var(--black);

    p {
        margin: 0;
    }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <Link to="/colophon" activeClassName="active">
                Colophon
            </Link>

            <p>Copyright &copy; {new Date().getFullYear()} Marcio Morgado.</p>
        </FooterStyle>
    );
}
