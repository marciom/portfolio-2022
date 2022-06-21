import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Nav from "./Nav";

import "sanitize.css";
import "sanitize.css/typography.css";

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

            <Nav />

            <main> {children} </main>

            <Footer />
        </>
    );
}
