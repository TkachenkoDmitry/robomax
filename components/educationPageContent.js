import React from 'react';

import ContactForm from './contactForm';

const homePageContent = () => {
  return (
    <>
      <section className='centered-text'>
        <div>
          <h1 className='hero-title'>
            Компания «РобоМакс» предлагает вам пригласить робота для проведения
            образовательных мероприятий. Нами были разработаны уникальные «Уроки
            Безопасности», способные эффективно донести до учеников базовые
            знания о безопасности.
          </h1>
        </div>
      </section>
      <section className='titled-section'>
        <div className='section-title'>
          <h2>ПРЕИМУЩЕСТВА</h2>
          <p>образования с помощью робота </p>
        </div>
        <div className='highlights'>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Дети проявляют интерес
              <br />к таком формату обучения
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Запоминают все,
              <br />
              что проходят на уроке
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Готовы применять
              <br />
              полученные знания в повседневной жизни
            </p>
          </div>
        </div>
      </section>
      <section className='titled-section'>
        <div className='section-title'>
          <h2>ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ</h2>
          <p>
            Каждая программа – это интересное интерактивное путешествие в мир
            знаний, заставляющая детей погрузиться в материал и извлечь массу
            полезных знаний.
          </p>
        </div>
        <div className='detailed-list'>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Безопасность и природа</h3>
            <p>
              Урок посвящен правильному поведению на природе, осторожному
              обращению с огнем, ориентации на местности и др.
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Осторожно: тонкий лед!</h3>
            <p>Безопасность в зимнее время года</p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Не шути с огнем!</h3>
            <p>Безопасное обращение с огнем дома и на природе</p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Электричество</h3>
            <p>
              Уроки безопасного обращения с электричеством, бытовыми приборами и
              др.
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>В мире колющих и режущих предметов</h3>
            <p>
              Осторожное обращение с опасными видами предметов, способными
              навредить ребенку
            </p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img src='../static/images/help-circle.svg' alt='icon' />
            </picture>
            <h3>Если ты потерялся</h3>
            <p>
              Правильное поведение в случае, если ребенок заблудился в городских
              условиях или на природе
            </p>
          </div>
        </div>
      </section>
      <section className='centered-text'>
        <div>
          <h2>
            Помимо разработанных нашей компанией «Уроков Безопасности» мы готовы
            проводить занятия на любые интересующие вас темы по вашим сценариям,
            либо сценариям, разработанным нашей компанией по индивидуальному
            заказу.
          </h2>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default homePageContent;
