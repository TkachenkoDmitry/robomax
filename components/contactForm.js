import React from 'react';

const contactForm = () => {
  return (
    <section className='contact-form'>
      <picture>
        <source type='image/png' />
        <img src='../static/images/robot.png' alt='icon' />
      </picture>
      <div>
        <h2>Contact us</h2>
        Оставьте заявку на аренду, выбрав интересующую Вас дату! (календарь и
        форма обратной связи: телефон, имя) Наша компания, в свою очередь,
        окажет техническое сопровождение и консультации по мере необходимости
        {/* <a href='/' className='button'>
          button!
        </a> */}
        <form action=''>
          <label htmlFor=''>Name</label>
          <input type='text' />
        </form>
      </div>
    </section>
  );
};

export default contactForm;
