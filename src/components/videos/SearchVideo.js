import React, {useState, useContext } from 'react';
import PexelContext from '../../context/PexelContext';

const SearchVideo = () => {
	const pexelContext = useContext(PexelContext);
	const [videoQuery, setVideoQuery] = useState('');
	
	const onSubmit = (e) => {
		e.preventDefault();
		if(videoQuery === '') {
			alert("Please enter something to search for :)");
		}
		else {
			pexelContext.searchVideos(videoQuery);
		}
	}
	
	const handleSearchInput = (e) => {
		setVideoQuery(e.target.value);
	}
	
	
	return (
		<>
		
				<form onSubmit={onSubmit}>
					<input 
						type="text"
						value={videoQuery}
						onChange={handleSearchInput}
						className="option-input"
					/>
					<br />
					<br />
					<input
						type="submit"
						value="Search Videos"
						className="btn btn-primary"
					/>
				</form>
		</>
	)
}

export default SearchVideo;