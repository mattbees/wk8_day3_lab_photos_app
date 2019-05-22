import React from 'react';
// import './Animal.css';

const Favourite = (props) => {

  const {url, category} = props.photoData;

  return (
    <div className='favourite'>
      <img src={url}/>
      <p>Category: {category}</p>
    </div>
  )
}

export default Favourite;
