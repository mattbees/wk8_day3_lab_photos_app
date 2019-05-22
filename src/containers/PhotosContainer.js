import { connect } from 'react-redux';
import PhotosList from '../components/PhotosList';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    photos: state.photos,
    category: state.category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    likePhoto: (photoId) => {
      dispatch({
        type: 'LIKE_PHOTO',
        photoId
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);
