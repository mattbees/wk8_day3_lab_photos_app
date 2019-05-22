import React from 'react';
// import './Button.css';

const Button = (props) => {
  const handleCategoryClick = (evt) => {
    props.filterCategory(props.category);
  }

  return (
    <div className='button'>
      <button onClick={ handleCategoryClick } value={ props.category } />
    </div>
  )
}

export default Button;
