import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

import 'sanitize.css';
import GlobalStyle from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children, breadcrumbs }) {
   return (
      <>
         <Helmet>
            <title>Marcio Morgado {breadcrumbs ? ` - ${breadcrumbs.join(' - ')}` : ``}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1" />
         </Helmet>

         <GlobalStyle />
         <Typography />

         <Nav />

         <main> {children} </main>

         <Footer />
      </>
   );
}
