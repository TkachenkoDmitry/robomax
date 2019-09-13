import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import Layout from '../components/layout';
import ContactForm from '../components/contactForm';
import HomePageContent from '../components/homePageContent';
const Home = () => (
  <Layout>
    <article className='content'>
      <HomePageContent />
    </article>
  </Layout>
);

export default Home;
