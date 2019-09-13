import React from 'react';
import TwoColumnsList from './twoColumnsList';
import ContactForm from './contactForm';

const homePageContent = () => {
  const robotList = [
    {
      title: 'mangal',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur velit ex?',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'mangal',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur velit ex?',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'mangal',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur velit ex?',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'mangal',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur velit ex?',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'mangal',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur velit ex?',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'mangal',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur velit ex?',
      img: '../static/images/robo_2.jpg',
    },
  ];
  return (
    <>
      <section className='centered-text'>
        <div>
          <h1 className='hero-title'>
            Компания «РобоМакс» предлагает вам приобрести роботов с
            искусственным интеллектом, актуальность которых блаблабла
          </h1>
        </div>
      </section>
      <TwoColumnsList list={robotList} title='Our robots!' />

      <section className='titled-section'>
        <div className='section-title'>
          <h2>Why is it not complete ripoff?!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            similique quae assumenda eligendi? Labore, veniam architecto
            voluptatum recusandae libero autem!
          </p>
        </div>
        <div className='highlights'>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
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
          <h2>Configuration</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facilis
            expedita facere?
          </p>
        </div>
        <div className='two-columns'>
          <div className='column-item'>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div className='column-item'>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div className='column-item'>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
          <div className='column-item'>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              magni reprehenderit!
            </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque
          temporibus exercitationem minus accusamus incidunt, nostrum aperiam
          magnam, sapiente minima excepturi animi quam iure beatae? Cupiditate
          illo animi error unde?
        </p>
      </section>
      <section className='titled-section'>
        <div className='section-title'>
          <h2>Tech support</h2>
          <strong>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            suscipit consectetur incidunt atque id fugiat tempora et facilis
            asperiores porro?
          </strong>
        </div>
        <div className='large-card'>
          <picture>
            <source type='image/svg' />
            <img alt='icon' src='../static/images/help-circle.svg' />
          </picture>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            recusandae labore laudantium incidunt culpa eligendi rem fugit a,
            quo, ut tenetur vel nesciunt distinctio doloribus aut. Consequuntur
            nihil excepturi facilis modi unde odit, molestiae illum eos deserunt
            harum saepe, quam praesentium minima debitis laboriosam ipsa?
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default homePageContent;
