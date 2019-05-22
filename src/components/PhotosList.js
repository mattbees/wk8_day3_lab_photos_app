import React from 'react';
import Photo from './Photo';
import './PhotosList.css';
import ButtonsContainer from '../containers/ButtonsContainer';

// if props.category is null then map everything
// if category !null then filter for cat and map results




const PhotosList = (props) => {

  const checkPhotos = () => {
    if (props.category === null) {
      return props.photos
    } else {
      return props.photos.filter(photo => {
        return photo.category === props.category;
      })
    }
  };

  const photos = checkPhotos()

  const photoCards = photos.map((photoData, index) => {
    return <Photo
      photoData={ photoData }
      key={photoData.id}
      likePhoto={props.likePhoto}
    />
  });
  return (
    <div id='photos-list'>
      { photoCards }
    </div>
  );
}

export default PhotosList;
