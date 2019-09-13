import React from 'react';
import Input from './UI/Input';

const contactForm = () => {
  return (
    <section className='contact-form'>
      <picture>
        <source type='image/png' />
        <img src='../static/images/robot.png' alt='icon' />
      </picture>
      <div>
        {/* <a href='/' className='button'>
            button!
          </a> */}
        <form action=''>
          <h2>Оставьте заявку!</h2>
          <p>
            Оставьте ваши контактные данные и мы проконсультируем вас по всем
            интересующим вас вопросам!
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
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default contactForm;
