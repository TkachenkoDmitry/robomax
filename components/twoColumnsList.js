/* eslint-disable react/prop-types */
import React from 'react';

const twoColumnsList = ({ title, list, subtitle }) => {
  return (
    <section className='titled-section'>
      <div className='section-title'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <section className='card-list'>
        {list.map((item, i) => (
          <div key={`${item.title}_${i}`}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default twoColumnsList;
