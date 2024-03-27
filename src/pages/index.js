import React from 'react';
import  { Redirect } from 'react-router-dom';
import Head from '@docusaurus/Head';
export default function Home() {

  
  return (
    <Main>

    <Head>
    <meta property="og:image" content="image.png" />
  </Head>
  
  <Redirect to='/docs/Customer script tutorial/intro' />
  </Main>
  
  );
}