import React, { useReducer } from 'react';
import PexelContext from './PexelContext';
import PexelReducer from './PexelReducer';
import {
	SEARCH_PHOTOS
} from './Types';

const PexelState = props => {
	const initialState = {
		photos: [],
		videos: [],
		loading: false
	}
	
	const [state, dispatch] = useReducer(PexelReducer, initialState);
	const apiKey = '';
	
	const searchPhotos = async query => {
		//setLoading();
		let url = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
		const res = await fetch("https://cors-anywhere.herokuapp.com/"+url, {
			method: 'GET',
			headers: new Headers({
				'Authorization': '563492ad6f91700001000001f277b44a880f4359844ddef5ee0188df'
			})
			
		})
		.catch(err => console.error('error'));
		let data = await res.json();
		console.log(data.photos);
		console.log(data);
		dispatch({
			type: SEARCH_PHOTOS,
			payload: data.photos
		})
	}
	
	const getPhoto = async (photoId) => {
		//setLoading();
		//const res;
	};
	
	
	
	return ( 
		<PexelContext.Provider
			value={{
				photos: state.photos,
				loading: state.loading,
				searchPhotos
			}}
		>
			{props.children}
		</PexelContext.Provider>
	)
	
	
}

	
export default PexelState;
		