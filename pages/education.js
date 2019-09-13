import React from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import Nav from '../components/nav';
import Layout from '../components/layout';
import EducationPageContent from '../components/educationPageContent';
const Home = () => (
  <Layout>
    <article className='content'>
      <EducationPageContent />
    </article>
  </Layout>
);

export default Home;
