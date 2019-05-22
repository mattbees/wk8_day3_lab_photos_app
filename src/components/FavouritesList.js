import React from 'react';
import Favourite from './Favourite';
import './FavouritesList.css';

const FavouritesList = (props) => {

  const checkPhotos = () => {
    if (props.category === null) {
      return props.filteredPhotos
    } else {
      return props.filteredPhotos.filter(photo => {
        return photo.category === props.category;
      })
    }
  };

  const photos = checkPhotos()


  const listItems = photos.map((photoData, index) => {
    return <Favourite
      photoData={ photoData }
      key={photoData.id}
    />
  });
  return (
    <div id='favourites-list'>
      { listItems }
    </div>
  );
}

export default FavouritesList;
