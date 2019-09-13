import React from 'react';

import Head from 'next/head';

import Layout from '../components/layout';
import EducationPageContent from '../components/educationPageContent';
export default () => (
  <>
    <Head>
      <title>Education</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        href='https://fonts.googleapis.com/css?family=Questrial&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Layout>
      <article className='content'>
        <EducationPageContent />
      </article>
    </Layout>
  </>
);
