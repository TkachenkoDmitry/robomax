import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import Layout from '../components/layout';
import HomePageContent from '../components/homePageContent';

export default () => (
  <Layout>
    <article className='content'>
      <HomePageContent />
    </article>
  </Layout>
);
