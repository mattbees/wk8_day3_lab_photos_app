import React from 'react';
import './Button.css';

const Button = (props) => {
  const handleCategoryClick = (evt) => {
    props.filterCategory(props.category);
  }

  return (
    <div>
      <button className='button' onClick={ handleCategoryClick } value={ props.category }>{ props.category }</button>
    </div>
  )
}

export default Button;
