import { 
	SEARCH_PHOTOS
} from './Types';

export default (state, action) => {
	switch(action.type) {
		case SEARCH_PHOTOS:
			return {
				...state,
				photos: action.payload,
				loading: false
			}
		
		default:
			return state;
	}
};
