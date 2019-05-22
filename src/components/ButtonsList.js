import React from 'react';
import Button from './Button';
import './ButtonsList.css';

const ButtonsList = (props) => {
  const buttonItems = props.categories.map((category, index) => {
    return <Button
      category={ category }
      key={index}
      filterCategory={props.filterCategory}
    />
  });
  return (
    <div id='buttons-list'>
      { buttonItems }
    </div>
  );
}

export default ButtonsList;
