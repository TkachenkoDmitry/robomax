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
            <h1>О НАС</h1>
            <p>
              ROBOMAX – это удивительные роботы с искусственным интеллектом,
              применимые в самых различных сферах (b2b / b2c), а наша франшиза –
              это ваша возможность получать стабильный и прогнозируемый доход
              под контролем опытной и успешной команды.
            </p>
            <h3>Наша компания работает в двух направлениях:</h3>
          </div>
          <div className='two-columns vertical'>
            <div className='column-item'>
              <picture className='oneThird'>
                <source type='image/svg' />
                <img src='./static/images/loan-icon.png' alt='icon' />
              </picture>
              <p>
                Аренда роботов с искусственным интеллектом. (Мы помогаем бизнесу
                расти,
              </p>
            </div>
            <div className='column-item'>
              <picture className='oneThird'>
                <source type='image/svg' />
                <img src='./static/images/loan-icon.png' alt='icon' />
              </picture>
              <p>Проведение образовательных мероприятий</p>
            </div>
          </div>
          <p>
            Каждое направление – отдельная и финансово независимая деятельность.
          </p>
        </section>
        <section className='titled-section'>
          <div className='section-title'>
            <h2>АРЕНДА РОБОТОВ</h2>
          </div>
          <div className='large-card'>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
            <p>
              Мы помогаем бизнесу расти с помощью предоставления роботов с
              искусственным интеллектом. Работа по сдаче роботов в аренду
              ведется через маркетинговые и event-агентства, что позволяет в
              кротчайшие сроки собрать большой пул заказов и ускорить
              окупаемость франшизы. Высокий спрос среди заказчиков – юридических
              лиц позволяет обеспечить высокую ежедневную загруженность каждого
              робота.
            </p>
          </div>
        </section>
        <section className='titled-section'>
          <div className='section-title'>
            <h2>ОБРАЗОВАТЕЛЬНАЯ ДЕЯТЕЛЬНОСТЬ</h2>
          </div>
          <div className='large-card'>
            <p>
              Нами были разработаны образовательные курсы, основной тематикой
              которых является детская безопасность. Робот-учитель позволяет
              приковать внимание детей к теме занятия, благодаря чему дети
              запоминают всю информацию и будут готовы применить ее на практике
              в случае необходимости. Уроки проводятся на базе школ, а конверсия
              в показы составляет свыше 80%
            </p>
            <picture>
              <source type='image/svg' />
              <img alt='icon' src='../static/images/help-circle.svg' />
            </picture>
          </div>
        </section>
        <section className='titled-section'>
          <div className='section-title'>
            <h2>ПРЕИМУЩЕСТВА ФРАНШИЗЫ ROBOMAX</h2>
          </div>
          <div className='two-columns'>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>Новый, современный и востребованный продукт</p>
            </div>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>Критично низкая конкуренция или ее полное отсутствие</p>
            </div>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>Высокий доход с каждого робота</p>
            </div>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>Небольшие вложения</p>
            </div>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>
                Личный специалист по сопровождению, который также займется
                продвижением робота в вашем регионе
              </p>
            </div>
            <div className='column-item'>
              <picture>
                <source type='image/svg' />
                <img alt='icon' src='../static/images/help-circle.svg' />
              </picture>
              <p>Окупаемость – до 8 месяцев.</p>
            </div>
          </div>
        </section>
        <section className='titled-section'>
          <div className='section-title'>
            <h2>ФИНАНСОВЫЕ ПОКАЗАТЕЛИ</h2>
            <strong>
              Оставьте Ваши контактные данные и получите подробную финансовую
              модель нашей франшизы, основанную на реальных показателях.
            </strong>
            <ContactForm />
          </div>
        </section>
      </article>
      <section className='titled-section'>
        <div className='section-title'>
          <h2>TIMELINE SPIZDET'</h2>
        </div>
      </section>
    </>
  );
};

export default franchisePageContent;
