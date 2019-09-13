import React from 'react';

const Input = props => {
  const {
    input,
    label,
    type,
    meta: { touched, error, warning },
  } = props;
  const forAtr = label.toLowerCase();
  const inputClasses = ['Input'];
  if (input.value) {
    inputClasses.push('HasValue');
  }
  if (warning && touched) {
    inputClasses.push('Invalid');
  }
  return (
    <div className={['Field', label].join(' ')}>
      <label htmlFor={forAtr}>
        <input
          autoComplete={forAtr}
          className={inputClasses.join(' ')}
          id={forAtr}
          {...input}
          type={type}
        />
        <div className='Label'>{label}</div>
      </label>
      <div className='ErrorMessage'>
        {touched &&
          ((error && <p>{error}</p>) || (warning && <p>{warning}</p>))}
      </div>
    </div>
  );
};

export default Input;
