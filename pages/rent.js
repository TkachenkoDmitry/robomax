import React from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import Nav from '../components/nav';
import Layout from '../components/layout';
import RentPageContent from '../components/rentPageContent';
const Home = () => (
  <Layout>
    <article className='content'>
      <RentPageContent />
    </article>
  </Layout>
);

export default Home;
