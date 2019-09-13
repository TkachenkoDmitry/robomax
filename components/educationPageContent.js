import React from 'react';

import ContactForm from './contactForm';

const homePageContent = () => {
  return (
    <>
      <section className='centered-text'>
        <div>
          <h1 className='hero-title'>Образование</h1>
        </div>
      </section>
      <section className='titled-section'>
        <div className='section-title'>
          <h2>Преимущества</h2>
          <p>такого способа образования</p>
        </div>
        <div className='highlights'>
          <div>
            <picture>
              <source type='image/svg' type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
        </div>
      </section>
      <section className='titled-section'>
        <div className='section-title'>
          <h2>Образовательные программы</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus
            expedita laborum ullam totam maxime a qui veritatis quidem commodi.
          </p>
        </div>
        <div className='detailed-list'>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              recusandae nesciunt earum, deleniti iste impedit explicabo?
              Doloribus dignissimos quas assumenda quaerat distinctio animi
              dolores odio.
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              recusandae nesciunt earum, deleniti iste impedit explicabo?
              Doloribus dignissimos quas assumenda quaerat distinctio animi
              dolores odio.
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              recusandae nesciunt earum, deleniti iste impedit explicabo?
              Doloribus dignissimos quas assumenda quaerat distinctio animi
              dolores odio.
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              recusandae nesciunt earum, deleniti iste impedit explicabo?
              Doloribus dignissimos quas assumenda quaerat distinctio animi
              dolores odio.
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              recusandae nesciunt earum, deleniti iste impedit explicabo?
              Doloribus dignissimos quas assumenda quaerat distinctio animi
              dolores odio.
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              recusandae nesciunt earum, deleniti iste impedit explicabo?
              Doloribus dignissimos quas assumenda quaerat distinctio animi
              dolores odio.
            </p>
          </div>
        </div>
      </section>
      <section className='centered-text'>
        <div>
          <h2>
            Помимо этого наша компания может провести уроки по Вашим сценариям!
          </h2>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default homePageContent;
