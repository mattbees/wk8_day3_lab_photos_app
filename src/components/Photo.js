import React from 'react';
import './Photo.css';

const Photo = (props) => {
  const handleLikeClick = (evt) => {
    props.likePhoto(props.photoData.id);
  }

  const {url, category, liked} = props.photoData;

  return (
    <div className='photo'>
      <img src={url}/>
      <p>Category: {category}</p>
      <button onClick={ handleLikeClick }>Like</button>
    </div>
  )
}

export default Photo;
