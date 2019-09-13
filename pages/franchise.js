import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import Layout from '../components/layout';
import HeroBanner from '../components/heroBanner';
import FranchisePageContent from '../components/franchisePageContent';
const Home = () => (
  <Layout>
    <FranchisePageContent />
  </Layout>
);

export default Home;
