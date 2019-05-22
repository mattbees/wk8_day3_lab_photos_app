import { connect } from 'react-redux';
import FavouritesList from '../components/FavouritesList';



const mapStateToProps = (state) => {
  // FILTER STATE AND RETURN FAVOURITES
  const filteredState = state.photos.filter(photo => {
    return photo.liked === true;
  });
  return {
    filteredPhotos: filteredState,
    category: state.category
  };
};

export default connect(mapStateToProps)(FavouritesList);
