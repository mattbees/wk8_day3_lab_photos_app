const photosReducer = (state = [], action) => {
  switch(action.type) {
    case 'LIKE_PHOTO':
      const newState = [ ...state ];
      function findPhoto(element) {
        return element.id === action.photoId;
      }
      const index = newState.findIndex(findPhoto);
      newState[index].liked = true;
      return newState;
    default:
      return state
  };
};

export default photosReducer;
