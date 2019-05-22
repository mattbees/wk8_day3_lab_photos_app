const photosReducer = (state, action) => {
  switch(action.type) {
    case 'LIKE_PHOTO':
      // refactor to start by spreading out a new state object
      const newPhotos = [ ...state.photos ];
      function findPhoto(element) {
        return element.id === action.photoId;
      }
      const index = newPhotos.findIndex(findPhoto);
      newPhotos[index].liked = true;
      return { ...state, photos: newPhotos }
    case 'FILTER_CATEGORY':
      return { ...state, category: action.category }
    default:
      return state
  };
};

export default photosReducer;
