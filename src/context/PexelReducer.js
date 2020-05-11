import {
  SEARCH_PHOTOS,
  SEARCH_VIDEOS,
  GET_RANDOM_PHOTO,
  SET_ERROR,
  SET_LOADING,
} from "./Types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        videos: [],
        randomPhoto: [],
        error: false,
        loading: false,
      };

    case SEARCH_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        photos: [],
        randomPhoto: [],
        error: false,
        loading: false,
      };

    case GET_RANDOM_PHOTO:
      return {
        ...state,
        randomPhoto: action.payload,
        photos: [],
        videos: [],
        error: false,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        photos: [],
        videos: [],
        randomPhoto: [],
      };

    case SET_ERROR:
      return {
        ...state,
        randomPhoto: [],
        photos: [],
        videos: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
