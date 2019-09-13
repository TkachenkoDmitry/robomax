import React from 'react';
import HeroBanner from './heroBanner';
import ContactForm from './contactForm';

const franchisePageContent = () => {
  return (
    <>
      <HeroBanner />
      <article className='content'>
        <section className='titled-section'>
          <div className='section-title'>
            <h1>Buy my shit fast kindly!!!!</h1>
          </div>
          <div className='two-columns vertical'>
            <div className='column-item'>
              <picture className='oneThird'>
                <source type='image/svg' />
                <img src='./static/images/loan-icon.png' alt='icon' />
              </picture>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                tenetur possimus asperiores, accusantium maiores debitis?
              </p>
            </div>
            <div className='column-item'>
              <picture className='oneThird'>
                <source type='image/svg' />
                <img src='./static/images/loan-icon.png' alt='icon' />
              </picture>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                tenetur possimus asperiores, accusantium maiores debitis?
              </p>
            </div>
          </div>
        </section>
        <section className='titled-section'>
          <div className='section-title'>
            <h2>Configuration</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              facilis expedita facere?
            </p>
          </div>
          <div className='two-columns'>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                modi magni reprehenderit!
              </p>
            </div>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                modi magni reprehenderit!
              </p>
            </div>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                modi magni reprehenderit!
              </p>
            </div>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                modi magni reprehenderit!
              </p>
            </div>
          </div>
        </section>
        <section className='titled-section'>
          <div className='section-title'>
            <h2>Tech support</h2>
            <strong>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident suscipit consectetur incidunt atque id fugiat tempora et
              facilis asperiores porro?
            </strong>
          </div>
          <div className='large-card'>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur recusandae labore laudantium incidunt culpa eligendi
              rem fugit a, quo, ut tenetur vel nesciunt distinctio doloribus
              aut. Consequuntur nihil excepturi facilis modi unde odit,
              molestiae illum eos deserunt harum saepe, quam praesentium minima
              debitis laboriosam ipsa?
            </p>
          </div>
        </section>
        <section className='titled-section'>
          <div className='section-title'>
            <h2>Tech support</h2>
            <strong>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident suscipit consectetur incidunt atque id fugiat tempora et
              facilis asperiores porro?
            </strong>
          </div>
          <div className='large-card'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur recusandae labore laudantium incidunt culpa eligendi
              rem fugit a, quo, ut tenetur vel nesciunt distinctio doloribus
              aut. Consequuntur nihil excepturi facilis modi unde odit,
              molestiae illum eos deserunt harum saepe, quam praesentium minima
              debitis laboriosam ipsa?
            </p>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
          </div>
        </section>
        <section className='titled-section'>
          <div className='section-title'>
            <h2>Tech support</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              itaque rem esse doloremque! Odio pariatur velit mollitia culpa
              architecto. Minima.
            </p>
          </div>
          <ContactForm />
        </section>
      </article>
    </>
  );
};

export default franchisePageContent;
