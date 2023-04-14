import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

import 'sanitize.css';
import GlobalStyle from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyle />
            <Typography />
            <div className="container">
                <Nav />

                <main> {children} </main>

                <Footer />
            </div>
        </>
    );
}
