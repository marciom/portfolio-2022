import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Nav from "./Nav";

import "sanitize.css";
import GlobalStyle from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

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
            <Typography />

            <Nav />

            <main> {children} </main>

            <Footer />
        </>
    );
}
