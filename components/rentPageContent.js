import React from 'react';
import TwoColumnsList from './twoColumnsList';
import ContactForm from './contactForm';

const homePageContent = () => {
  const robotList = [
    {
      title: 'Промоутеры',
      description:
        'Ваш товар или услуга точно не останутся без внимания. Робот может воспроизводить любые аудио/видеофайлы, распознает лица, движение и может вести диалог с человеком',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'Гиды',
      description:
        'Используйте робота в качестве гида на выставках, ведь он способен запоминать любое количество информации, а также может ориентироваться в выбранной локации',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'Консультанты',
      description:
        'Консультируйте ваших клиентов с помощью робота, не требующего выходных, обеда и сверхурочных',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'Рецепшионисты',
      description:
        'Встречайте эффектно ваших гостей и клиентов на различных мероприятиях. Загружайте свое ПО и Робот выполнит любые функции (check-in, check-out, консультации, оплата и др.)',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'Учителя',
      description:
        'Позвольте роботу эффективно донести любую важную информацию до учеников',
      img: '../static/images/robo_2.jpg',
    },
    {
      title: 'Официанты',
      description:
        'Робот-официант – ваша возможность удивить гостей необычным официантом. Загружайте в него карту ресторана с расположением столиков, меню и многое другое',
      img: '../static/images/robo_2.jpg',
    },
  ];
  return (
    <>
      <section className='centered-text'>
        <div>
          <h1 className='hero-title'>
            Компания «РобоМакс» предлагает в аренду современных роботов с
            искусственным интеллектом, благодаря которым Вы можете повышать
            узнаваемость бренда, привлекать новых клиентов, а также проводить
            всевозможные мероприятия.
          </h1>
        </div>
      </section>
      <TwoColumnsList
        list={robotList}
        title='СФЕРЫ ПРИМЕНЕНИЯ'
        subtitle='Наши роботы применимы в разнообразных сферах и уже используются как'
      />

      <section className='titled-section'>
        <div className='section-title'>
          <h2>ПРЕИМУЩЕСТВА</h2>
          <p>
            Преимущества использования роботов с искусственным интеллектом
            неоспоримы:
          </p>
        </div>
        <div className='highlights'>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>Привлечение внимания аудитории</p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>Эффективное использование маркетингового бюджета</p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>Выделение среди конкурентов</p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>Невысокая стоимость аренды</p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>Удаленный контроль всех процессов</p>
          </div>
          <div>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>Работает 24/7/365</p>
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
