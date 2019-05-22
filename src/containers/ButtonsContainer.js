import { connect } from 'react-redux';
import ButtonsList from '../components/ButtonsList';


const mapStateToProps = (state) => {
  // filter for unique cats
  // return an array of cats
  const categories = [ ...state ];
  // categories.filter((element, index) => {
  //   return element.indexOf(element.category) === index
  // });
  return {
    categories: categories
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     likeButton: (photoId) => {
//       dispatch({
//         type: 'LIKE_PHOTO',
//         photoId
//       })
//     }
//   };
// };

export default connect(mapStateToProps)(ButtonsList);
