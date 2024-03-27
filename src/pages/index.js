// Inside your site's HTML template file, typically located in src/theme/your-theme/Layout.js

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Head } from '@docusaurus/Head'; // Import Head from Docusaurus

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Your Website Title">
        <meta property="og:description" content="Description of your website">
        <meta property="og:image" content="https://picsum.photos/200/300">

      </Head>
      <Redirect to='/docs/Customer script tutorial/intro' />
    </>
  );
}
