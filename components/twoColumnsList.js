import React from 'react';

const twoColumnsList = ({ title, list }) => {
  return (
    <section className='card-list'>
      <h1>{title}</h1>
      {list.map((item, i) => (
        <div key={`${item.title}_${i}`}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </section>
  );
};

export default twoColumnsList;
