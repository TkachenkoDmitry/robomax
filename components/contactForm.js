import React from 'react';
import Input from './UI/Input';

const contactForm = () => {
  return (
    <section className='full-bleed contact'>
      <div className='contact-form'>
        <picture>
          <source type='image/png' />
          <img src='../static/images/robot.png' alt='icon' />
        </picture>
        <div>
          {/* <a href='/' className='button'>
            button!
          </a> */}
          <form action=''>
            <h2>Contact us</h2>
            <p>
              Оставьте заявку на аренду, выбрав интересующую Вас дату!
              (календарь и форма обратной связи: телефон, имя) Наша компания, в
              свою очередь, окажет техническое сопровождение и консультации по
              мере необходимости
            </p>
            <br />
            <br />
            <Input
              input={{}}
              label='Name'
              type='text'
              meta={{ touched: false }}
            />
            <Input
              input={{}}
              label='Email'
              type='email'
              meta={{ touched: false }}
            />
            <Input
              input={{}}
              label='Phone'
              type='phone'
              meta={{ touched: false }}
            />
            <Input
              input={{}}
              label='Message'
              type='text'
              meta={{ touched: false }}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default contactForm;
