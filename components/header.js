import React from 'react';
import Link from 'next/link';
const header = () => {
  return (
    <header>
      <nav>
        <div className='main-nav'>
          <Link href='/'>
            <a>
              <img
                className='nav-logo'
                src='../static/images/logo.png'
                alt='logo'
              />
            </a>
          </Link>
          <Link href='/rent'>
            <a>Аренда</a>
          </Link>
          <Link href='/education'>
            <a>Образование</a>
          </Link>
          <a href='/contact.html'>Контакты</a>
        </div>
        <div className='quick-nav'>
          <Link href='/franchise'>
            <a>Франшиза</a>
          </Link>
          <a href='/'>ico phone</a>
          <a href='/'>ico mail</a>
        </div>
      </nav>
    </header>
  );
};

export default header;
