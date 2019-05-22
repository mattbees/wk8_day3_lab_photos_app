import React from 'react';
import Favourite from './Favourite';
// import './FavouritesList.css';

const FavouritesList = (props) => {
  const listItems = props.filteredPhotos.map((photoData, index) => {
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
