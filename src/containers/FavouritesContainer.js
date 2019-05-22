import { connect } from 'react-redux';
import FavouritesList from '../components/FavouritesList';



const mapStateToProps = (state) => {
  // FILTER STATE AND RETURN FAVOURITES
  const filteredState = state.filter(photo => {
    return photo.liked === true;
  });
  return {
    filteredPhotos: filteredState
  };
};

export default connect(mapStateToProps)(FavouritesList);
