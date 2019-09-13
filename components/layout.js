import React from 'react';
import Header from './header';
import 'normalize.css';
import '../scss/style.scss';

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Here goes Jonny!</footer>
    </>
  );
};

export default layout;
