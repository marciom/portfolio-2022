import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Nav from "./Nav";

import "sanitize.css";
import "sanitize.css/typography.css";
import GlobalStyle from "../styles/GlobalStyles";
import styled from "styled-components";

const Main = styled.main`
    padding: 0 7.5vw;
`;

export default function Layout({ children, breadcrumbs }) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Marcio Morgado{" "}
                    {breadcrumbs ? ` - ${breadcrumbs.join(" - ")}` : ``}
                </title>
            </Helmet>

            <GlobalStyle />

            <Nav />

            <Main> {children} </Main>

            <Footer />
        </>
    );
}
