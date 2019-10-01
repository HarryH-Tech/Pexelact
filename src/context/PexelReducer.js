import { 
	SEARCH_PHOTOS,
	SEARCH_VIDEOS,
	GET_RANDOM_PHOTO
} from './Types';

export default (state, action) => {
	switch(action.type) {
		case SEARCH_PHOTOS:
			return {
				...state,
				photos: action.payload,
				videos: [],
				randomPhoto: [],
				loading: false,
				
			}
		
		case SEARCH_VIDEOS:
			return {
				...state,
				videos: action.payload,
				photos: [],
				randomPhoto: [],
				loading: false
			}
			
		case GET_RANDOM_PHOTO:
			return {
				...state,
				randomPhoto: action.payload,
				photos: [],
				videos: [],
				loading: false
			}
		default:
			return state;
	}
};
