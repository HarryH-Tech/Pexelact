import React, { useReducer } from 'react';
import PexelContext from './PexelContext';
import PexelReducer from './PexelReducer';
import {
	SEARCH_PHOTOS,
	SEARCH_VIDEOS,
	GET_RANDOM_PHOTO
} from './Types';

const PexelState = props => {
	const initialState = {
		photos: [],
		videos: [],
		randomPhoto: [],
		loading: false
	}
	
	const [state, dispatch] = useReducer(PexelReducer, initialState);
	const apiKey = '';
	const avoidCorsProxyUrl = "https://cors-anywhere.herokuapp.com/"
	
	// Search Photos
	const searchPhotos = async query => {
		//setLoading();
		const url = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
		const res = await fetch(avoidCorsProxyUrl + url, {
			method: 'GET',
			headers: new Headers({
				'Authorization': '563492ad6f91700001000001f277b44a880f4359844ddef5ee0188df'
			})
			
		})
		.catch(err => console.error('error'));
		const data = await res.json();
		console.log(data.photos);
		console.log(data);
		//console.log(data);
		dispatch({
			type: SEARCH_PHOTOS,
			payload: data.photos
		})
	}
	
	
	//Search Videos
	const searchVideos = async query => {
		const url = `https://api.pexels.com/videos/search?query=${query}&per_page=15&page=1`;
		const res = await fetch(avoidCorsProxyUrl + url, {
			method: "GET",
			headers: new Headers ({
				'Authorization': '563492ad6f91700001000001f277b44a880f4359844ddef5ee0188df'
			})
		})
		.catch(err => console.error('Error'));
		const data = await res.json();
		console.log(data.videos);
		dispatch({
			type: SEARCH_VIDEOS,
			payload: data.videos
		})
	}
		
		
	
	const getRandomPhoto = async query => {
		const randomNumber = Math.floor(Math.random() * 1001);
		const url = `https://api.pexels.com/v1/curated?per_page=1&page=${randomNumber}`
		const res = await fetch(avoidCorsProxyUrl + url, {
			method: "GET",
			headers: new Headers({
				'Authorization': '563492ad6f91700001000001f277b44a880f4359844ddef5ee0188df'
			})
		})
		.catch(err => console.error('Error'));
		const data = await res.json();
		console.log(data.photos[0]);
		dispatch({
			type: GET_RANDOM_PHOTO,
			payload: data.photos[0]
		})
		
	}
	
	
	return ( 
		<PexelContext.Provider
			value={{
				photos: state.photos,
				videos: state.videos,
				randomPhoto: state.randomPhoto,
				loading: state.loading,
				searchPhotos,
				searchVideos,
				getRandomPhoto
			}}
		>
			{props.children}
		</PexelContext.Provider>
	)
	
	
}

	
export default PexelState;
		