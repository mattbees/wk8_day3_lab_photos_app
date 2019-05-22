import React from 'react';
import Photo from './Photo';
import './PhotosList.css';
import ButtonsContainer from '../containers/ButtonsContainer';

const PhotosList = (props) => {
  console.log(props);
  const listItems = props.photos.map((photoData, index) => {
    return <Photo
      photoData={ photoData }
      key={photoData.id}
      likePhoto={props.likePhoto}
    />
  });
  return (
    <div id='photos-list'>
      { listItems }
    </div>
  );
}

export default PhotosList;
